//отображение рекламного банера под полем ввода
export default function Banner({img}: string) {
  return (
    <div>
      <image src={img}></image>
    </div>
  );
}