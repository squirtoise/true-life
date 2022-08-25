import React, { useState } from 'react';
import Button from './Button';


function MenuBtn() {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return <Button icon={} iconClass={} btnClass={} onClickFunc={() => {setIsOpened((prev) => !prev)}} />;
}
