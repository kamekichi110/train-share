$(function () {
    $.ajax({
      url: "https://transit.yahoo.co.jp/diainfo/21/0", // 別ページにあるhtmlページURL
      cache: false,
      datatype: "html",
      success: function (html) {
        var html = $(html).find("dd.trouble"); //  別ページにあるhtml内の一部の要素を指定
        $("#yamanote").append(html); // append関数を使って取得したhtmlコードの埋め込み先を指定
      },
    });
  });