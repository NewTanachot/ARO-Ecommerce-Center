import Link from "next/link";

interface IProps {
    btnTitle : string;
    iconClass : string;
    linkPath : string;
}

export default function SidebarBtn(props : IProps) {
    return (
        <div>
            <Link href={props.linkPath} className="btn btn-lg btn-primary bg-gradient rounded-3 shadow w-100 text-nowrap">
                <div className="h3 m-0">
                    {props.btnTitle}
                    <i className={props.iconClass}></i>
                </div>
            </Link>
        </div>
    );
}