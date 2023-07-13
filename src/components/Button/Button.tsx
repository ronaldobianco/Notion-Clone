import { FunctionComponent } from "react";

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    classname?: string,
}
 
const BaseButton: FunctionComponent<BaseButtonProps> = ({classname = '', ...BaseButton}) => {
    return (<button {...BaseButton} className={classname}></button>  );
}
 
export default BaseButton;