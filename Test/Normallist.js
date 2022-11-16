import "./normallist.css"
export default function Normallist({ arrayData1, setArrayData1, handleclick1, Normallist_name, arrayData2, setArrayData2 }) {

    return (
        <>
            <div className="Normallist">
                <div className="Normallist_row1">
                    <label className="Normallist_row1_label">{Normallist_name}</label>
                    <div className="Normallist_row1_button">
                        <button onClick={(e) => { handleclick1(e) }} ><b>ADD</b></button>
                    </div>
                </div>
                <div className="Normallist_row2"></div>
                <div className="Normallist_row3">
                    <label className="Normallist_row3_label1">FirstName</label>
                    <label className="Normallist_row3_label2">LastName</label>
                    <label className="Normallist_row3_label3">Status</label>
                    <label className="Normallist_row3_label4">Last Updated On</label>
                </div>
                <div className="Normallist_row4"></div>
                <div className="maptable">
                    
                    {/* // arrayData1.map((item1, index) =>  */}
                         <Table  arrayData1={arrayData1} setArrayData1={setArrayData1} />
                    // 
                    
                    {/* {arrayData2.map((item2, index) => {
                        return <Table1 item2={item2} arrayData2={arrayData2} setArrayData2={setArrayData2} />
                    })
                    } */}
                </div>
            </div>
        </>
    )
}

function Table({item1,arrayData1,setArrayData1}) {
    const d = new Date(item1.item1.dtUpdatedOn);
    console.log("D==>" + d)
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    console.log("item" + JSON.stringify(item1))
    arrayData1.map((item1, index) => {
    return <>
        <div className="Normallist_row5">
            <label>{item1.item1.txtFirstName}</label>
            <label>{item1.item1.txtLastName}</label>
            <label>{item1.item1.txtConversionType}</label>
            <label>{year}-{month}-{day}</label>
        </div>
    </>
    })
}

// function Table1(item2) {
//     const d = new Date(item2.item2.dtUpdatedOn);
//     console.log("D==>" + d)
//     let day = d.getDate();
//     let month = d.getMonth() + 1;
//     let year = d.getFullYear();
//     console.log("item" + JSON.stringify(item2))
//     return <>
//         <div className="Normallist_row5">
//             <label>{item2.item2.txtFirstName}</label>
//             <label>{item2.item2.txtLastName}</label>
//             <label>{item2.item2.txtConversionType}</label>
//             <label>{year}-{month}-{day}</label>
//         </div>
//     </>
// }