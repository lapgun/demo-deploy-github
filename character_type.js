/**
 * @param value {string}
 * @param options {{[key: string]: boolean|string}}
 * */

export const character_type = (value, options) => {
    let pattern = "";
  
    if (options.symbols) pattern += options.symbols;
  
    if (options.fw || options.alphabet_fw) pattern += "Ａ-Ｚａ-ｚ";
    if (options.fw || options.hiragana) {
      pattern += "぀-ゟ";
      pattern += "。っー、ぁぃぅぇぉゃゅょ.，,｡"; // Danh sách các ký tự đặc biệt cho phép nhập ở các item có thể nhập hiragana
    }
    if (options.fw || options.kanji)
      pattern +=
        "\u4E00-\u9FAF\u3400-\u4DBF\u3000-\u3035\u3037\u303F\u30A0-\u30FF";
    if (options.fw || options.katakana) pattern += "ァ-ンー";
    if (options.fw || options.number_fw) pattern += "０-９";
    if (options.hw || options.alphabet) pattern += "A-Za-z";
    if (options.hw || options.katakana_hw) pattern += "ｧ-ﾝﾞﾟ";
    if (options.hw || options.number) pattern += "0-9";
    if (options.katakana_small) pattern += "ヵヶ";
  
    pattern += "\u0020\u3000\t"; // white space
    return new RegExp(`^[${pattern}]+$`).test(value);
  };
  