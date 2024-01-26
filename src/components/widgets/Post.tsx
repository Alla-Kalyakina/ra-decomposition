export interface Props{
  title:string;
  children?: React.ReactNode;
}
//функция-обертка для постов
export default function Post({title, children} : Props) {
  return (
    <div>
        <h1>{title}</h1>
      {children}
    </div>
  );
}