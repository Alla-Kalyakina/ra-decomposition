//отображение подсказки под поиском
interface Props {
    text:string;
  }

export default function Promt({text}: Props) {
  return (
    <div>
      {text}
    </div>
  );
}