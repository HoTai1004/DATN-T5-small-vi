const btn = document.querySelector(".button");
const rs_detect = document.querySelector(".rs-detect");
btn.addEventListener("click", async () => {
  const text = document.querySelector(".textarea")
  if(text.value.split(" ").length < 30){
    rs_detect.value = "Quá ít dữ liệu vui lòng nhập nhiều hơn"
    return
  }
  const bodyInput = { "content": text.value};
  let api_t5model_vi = await fetch("http://127.0.0.1:8000/summary_text_t5vimodel", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(bodyInput),
    });
    api_t5model_vi = await api_t5model_vi.json();
    let summary = api_t5model_vi["result"]
    rs_detect.value = `${summary}`
}
);

