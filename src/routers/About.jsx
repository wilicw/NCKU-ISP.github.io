function About() {
  return (
    <>
      <div className='bg-zinc-100 mx-auto max-w-5xl rounded-xl p-10 my-10' style={{ color: "#383838" }}>
        <p className='text-3xl font-bold pb-2'>團隊介紹</p>
        <hr className="border-blue-300 w-10 border-b-2" />
        <p className="py-3">我們是來自臺灣成功大學的 ISP 太空推進研究社 (Institute of Space Propulsion)。ISP 是一個由成大不同系所的學生自發性成立的社團，並且致力於研究火箭技術。在成立的這三年間，ISP 無論在研究、飛行測試、課程及推廣皆有著墨。這個團隊充滿著富有熱誠、對未來有著無限憧憬且不乏實力的青年們。</p>
        <img src="https://i.imgur.com/S0hVyit.jpg" className="block rounded-xl" alt="" />
      </div>
    </>
  );
}

export default About;
