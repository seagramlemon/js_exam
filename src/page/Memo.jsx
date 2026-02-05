import { useState } from "react";
import styles from "./memo.module.css";

const Memo = () =>{
    const [memoNo, setMemoNo] = useState(1);
    const [memoList, setMemoList] = useState([]);
    const [memo, setMemo] = useState({title : "", content : "",writer:""});
    const inputMemo = (e) =>{
        const name = e.target.name;
        setMemo({...memo,[name]:e.target.value});
    }
    const addMemo = () =>{
        if(memo.title === "" || memo.writer === "" ||memo.content === ""){
            return;
        }
        const newMemo = {...memo,no : memoNo};
        setMemoNo(memo+1);
        setMemoList([...memoList,newMemo]);
        setMemo({title : "", content : "",writer:""});
    }
    return(
        <>
            <header className={styles.header}>
                <h1>메모장</h1>
            </header>
            <main className={styles.memo_wrap}>
                <section className={styles.memo_input_wrap}>
                    <h2>메모작성</h2>
                    <form onSubmit={e => {
                        e.preventDefault();
                        addMemo();
                    }}>
                        <div className={styles.input_wrap}>
                            <label htmlFor="title">제목</label>
                            <input type="text" name="title" value={memo.title} id="title" onChange={inputMemo}/>
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="writer">작성자</label>
                            <input type="text" name="writer" value={memo.writer} id="writer" onChange={inputMemo}/>
                        </div>
                        <div className={styles.input_wrap}>
                            <label htmlFor="content">내용</label>
                            <textarea type="text" name="content" value={memo.content} id="content" onChange={inputMemo}></textarea>
                        </div>
                        <div className={styles.input_wrap}>

                            <button type="submit" className={styles.add_btn}>등록하기</button>
                        </div>
                    </form>
                </section>
                <section className={styles.memo_content_wrap}>
                    <h2>메모목록</h2>
                    <div className={styles.memo_list_wrap}>
                        {memoList.map((m,index)=>{
                            const removeMemo = () =>{
                                const removeList = memoList.filter((item)=>{
                                    return item !== m;
                                });
                                setMemoList(removeList);
                            }
                            return(
                                <div className={styles.memo_item} key={m+index}>
                                    <h3 className={styles.memo_title}>{m.title}</h3>
                                    <p className={styles.memo_content}>{m.content}</p>
                                    <p className={styles.memo_sub}>
                                        <span>{m.writer}</span>
                                        <button className={styles.delete_btn} onClick={removeMemo}>삭제</button>
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </main>
        </>
    )
}


export default Memo;