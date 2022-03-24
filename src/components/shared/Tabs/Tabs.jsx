import React, {useEffect, useState} from "react";

export default function Tabs(props) {

    const [toggleState, setToggleState] = useState(props.labels.length - 1 >= 0 ? props.labels.length - 1 : 0);

    useEffect(()=>{
        setToggleState(props.labels.length - 1 >= 0 ? props.labels.length - 1 : 0);
    },[props.labels, props.contents])

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <>
            { props.labels.length > 0 && props.contents.length > 0 &&
                <div className="container">
                    <div className="bloc-tabs">
                        {
                            props.labels.map((label, index) => {
                                return (
                                    <button
                                        className={toggleState ===  index ? "tabs active-tabs" : "tabs"}
                                        onClick={() => toggleTab(index)} key={index}> {label}</button>
                                );
                            })
                        }
                    </div>
                    <div className="content-tabs">
                        {
                            props.contents.map((content, index)=>{
                                return(
                                    <div
                                        className={(toggleState === index ? "content  active-content" : "content")
                                            + (props.contentClass ? props.contentClass : "") }
                                        key={index}>{content}</div>
                                )
                            })
                        }
                    </div>
                </div>

            }
        </>
    );
}

