import { useEffect, useState } from "react";
import styles from "./attention.module.css";

const Attention = () =>{
    const [addStudentName, setAddStudentName] = useState("");
    const [studentList, setStudentList] = useState([]);
    const [countObj, setCountObj] = useState([
        {name : "출석", count : 0},
        {name : "지각", count : 0},
        {name : "조퇴", count : 0},
        {name : "결석", count : 0},
        {name : "총인원", count : 0},
    ])
    const statusString = {
        0:"결석",
        1:"출석",
        2:"지각",
        3:"조퇴"
    };
    const addStudent = ()=>{
        if(addStudentName === ""){
            return;
        }
        setStudentList([...studentList,{name:addStudentName, status:0}]);
        setAddStudentName("");
    }
    useEffect(()=>{
        countObj.forEach((cnt)=>{
            cnt.count = 0;
        });
        studentList.forEach((student)=>{
            const data = student.status;
            if(data === 0){
                countObj[3].count += 1;
            }else if(data === 1){
                countObj[0].count += 1;
            }else if(data === 2){
                countObj[1].count += 1;
            }else if(data === 3){
                countObj[2].count += 1;
            }
        });
        countObj[4].count = studentList.length;
        setCountObj([...countObj]);
    },[studentList]);
    return(
        <div className={styles.memo_wrap}>
            <header className={styles.header}>
                <h1>출석관리시스템</h1>
            </header> 
            <main className={styles.main}>
                <section className={styles.student_input_wrap}>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        addStudent();
                    }}>
                        <input type="text" value={addStudentName} onChange={(e)=>{
                            setAddStudentName(e.target.value);
                        }} placeholder="학생이름입력"/>
                        <button className={[styles.btn, styles.primary].join(' ')}>학생추가</button>
                    </form>
                </section>
                <section className={styles.student_status_wrap}>
                    {countObj.map((cnt,idx)=>{
                        return(
                            <div className={styles.student_count} key={`${cnt}-${idx}`}>
                                {cnt.name} : <span className={styles.bold}>{cnt.count}</span>
                            </div>
                        )
                    })}
                    
                    
                    
                </section>
                <section className={styles.student_list_wrap}>
                    <ul className={styles.student_list_title}>
                        <li className={styles.student_name}>이름</li>
                        <li className={styles.student_status}>출석상태</li>
                        <li className={styles.student_status_change}>상태변경</li>
                    </ul>
                    {studentList.map((student,index)=>{
                        const changeStatus = (status) =>{
                            studentList[index].status = status;
                            setStudentList([...studentList]);
                        }
                        return(
                            <ul key={`${student}-${index}`}>
                                <li className={styles.student_name}>{student.name}</li>
                                <li className={styles.student_status}>{statusString[student.status]}</li>
                                <li className={styles.student_status_change}>
                                    <button className={[
                                        styles.btn,
                                        styles.primary]
                                        .join(' ')
                                    }
                                    onClick={()=>{
                                        changeStatus(1);
                                    }}
                                    >출석</button>
                                    <button className={[
                                        styles.btn,
                                        styles.secondary]
                                        .join(' ')
                                    }
                                    onClick={()=>{
                                        changeStatus(2);
                                    }}>지각</button>
                                    <button className={[
                                        styles.btn,
                                        styles.secondary]
                                        .join(' ')
                                    }
                                    onClick={()=>{
                                        changeStatus(3);
                                    }}
                                    >조퇴</button>
                                    <button className={[
                                        styles.btn,
                                        styles.secondary]
                                        .join(' ')
                                    }
                                    onClick={()=>{
                                        changeStatus(0);
                                    }}
                                    >결석</button>
                                    <button className={[
                                        styles.btn,
                                        styles.danger]
                                        .join(' ')
                                    }
                                    onClick={()=>{
                                        const newList = studentList.filter((s)=>{
                                            return s !== student;
                                        });
                                        setStudentList(newList);
                                    }}
                                    >삭제</button>
                                </li>
                            </ul>
                        )
                    })}
                </section>
            </main>
        </div>
    )
}


export default Attention;