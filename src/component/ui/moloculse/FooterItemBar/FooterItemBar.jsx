import React from "react";
import Icon from "../../atoms/Icon/Icon";
import P from "../../atoms/P/P";
import Span from "../../atoms/Span/Span";
import { Link } from "react-router-dom";



export function FooterItemBar({ title = '', item = [], icon }) {
    return (
        <div className="flex flex-col items-center gap-6 ">
            <P className={'text-white text-xl '}>
                {title}
            </P>
            <div className="flex flex-col items-end w-[95%] gap-5 ">
                {item.map((item, index) => (
                    <>
                        <div className="flex flex-col" key={index}>
                            <Link className={'text-white text-sm cursor-pointer hover:text-green-500'} to={item?.to}>
                                {item.title}
                            </Link>
                        </div>
                    </>
                ))
                }
                {icon && (
                    <div className="flex flex-row-reverse gap-3">
                        {icon.map((item, index) => (
                            <Span className={'flex '} key={index}>
                                <Icon name={item.icon} />
                            </Span>
                        ))}
                    </div>
                )}
            </div>
        </div >
    )
}