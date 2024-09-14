import { FC, useState } from "react";

interface Props {
    title: string;
}

export const ButtonPrimary: FC<Props> = ({title}) => {
   const [isSelected, setIsSelected] = useState(false);

  return (
     <p className="test">test</p>
  )
}