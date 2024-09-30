import * as z from 'zod'
import validationConfig from '@/validation/index.json'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

type BlockType = {
  type: string
  keyName?: string
  validationRules?: string[]
  contents?: BlockType[]
}

type ExtractedKey = { keyName: string; validationRules: string[] }

type ValidationRule = {
  name?: string
  message: string
  regex?: string
  value?: any
}

const validationDef: Record<string, ValidationRule> = validationConfig

const Validate = (validationRules: string[]): z.ZodType | undefined => {
  if (!validationRules || !validationRules.length) return z.any().optional()

  const validations: z.ZodType[] = validationRules.reduce<z.ZodType[]>((acc, rule): z.ZodType[] => {
    const ruleName = rule.split('/')[0]
    const ItemValidation = validationDef?.[ruleName]
    if (!ItemValidation) return acc
    const validation = applyValidationRule(rule, ItemValidation)

    if (validation) {
      acc.push(validation)
    }

    return acc
  }, [])

  if (validations.length === 0) return undefined

  if (validations.length === 1) {
    return validations[0]
  }

  return validations.reduce((acc, validation) => acc.and(validation))
}

const applyValidationRule = (ruleName: string, rule: ValidationRule): z.ZodType | undefined => {
  let validation: z.ZodType<any, any> | null = null
  const [baseRuleName] = ruleName.split('/')
  const ruleParam = ruleName.replace(`${baseRuleName}/`, '')

  switch (baseRuleName) {
    case 'domain':
    case 'postCode':
      validation = z.string().regex(new RegExp(rule.regex!), { message: rule.message }).optional()
      break
    case 'min':
      validation = z
        .string()
        .min(Number(ruleParam), {
          message: rule.message.replace('{value}', ruleParam),
        })
        .optional()
      break
    case 'max':
      validation = z
        .string()
        .max(Number(ruleParam), {
          message: rule.message.replace('{value}', ruleParam),
        })
        .optional()
      break
    case 'required':
      validation = z
        .string({ required_error: rule.message })
        .min(1, { message: rule.message })
        .optional()
      break
  }
  if (validation) {
    return validation
  }
}

const extractKeyNameAndRules = (data: BlockType): ExtractedKey[] => {
  const results: { keyName: string; validationRules: string[] }[] = []

  if (data.keyName) {
    results.push({ keyName: data.keyName, validationRules: data?.validationRules || [] })
  }

  if (data.contents && data.contents.length > 0) {
    data.contents.forEach((child) => {
      results.push(...extractKeyNameAndRules(child))
    })
  }

  return results
}

const getSchema = (initJson: any): { schema: z.ZodObject<any>; keys: string[] } => {
  const validations: { [key: string]: z.ZodType } = {}
  const DataJSON = { ...initJson }

  if (!DataJSON.contents) {
    return { schema: z.object(validations), keys: [] }
  }

  const contentsForm: ExtractedKey[] = extractKeyNameAndRules(DataJSON)

  contentsForm?.forEach((itemForm: { keyName: string; validationRules: string[] }) => {
    const eachValidate = Validate(itemForm.validationRules)
    if (eachValidate) {
      validations[itemForm.keyName] = eachValidate
    }
  })

  return {
    schema: z.object(validations),
    keys: contentsForm.map((item) => item.keyName),
  }
}

const defineFieldModel = (
  fieldKeys: string[],
  defineField: (name: string) => any
): Record<string, any> => {
  return Object.fromEntries(
    fieldKeys.map((key) => {
      return [key, defineField(key)[0]]
    })
  )
}

export const userFormCustom = (initJson: any, initialValues: Record<string, any>) => {
  const { schema, keys } = getSchema(initJson)

  const { errors, defineField } = useForm({
    initialValues,
    validationSchema: toTypedSchema(schema),
  })

  const values = defineFieldModel(keys, defineField)

  return {
    errors,
    ...values,
  }
}
