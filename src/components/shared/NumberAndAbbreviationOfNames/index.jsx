import React from 'react'
import {
    MemberImgsAndNumNumbers,
    MemberNumbers,
    MembersImg,
    MembersImgs
} from "../../Home/TopRanks/TopRanks.styles";

function NumberAndAbbreviationOfNames(props){

    const styles = [
        { background: '#FDD561', right: '80px', color:'black' },
        { background: '#FF5367', right: '50px', color:'white' },
        { background: '#503E9D', right: '20px', color:'#FDD561' }
    ]
    return (
        <MemberImgsAndNumNumbers>
            <MembersImgs>
                {
                    props.users.slice(0, 3).map((user, i)=>{
                            return <MembersImg key={i} style={styles[i]} >
                                {(user.person.first_name.charAt(0) + user.person.last_name.charAt(0)).toUpperCase()}
                            </MembersImg>
                    })
                }
            </MembersImgs>

            { props.users.length - 3 > 0 &&
                <MemberNumbers>+{props.users.length - 3}</MemberNumbers>
            }

        </MemberImgsAndNumNumbers>
    )
}
export default NumberAndAbbreviationOfNames;