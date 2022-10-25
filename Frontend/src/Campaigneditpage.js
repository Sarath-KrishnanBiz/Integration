import Form from "./Components/Form";
import Horizontalbar from "./Components/Horizontalbar";
import LeftBar from "./Components/LeftBar";
import Normallist from "./Components/Normallist";
import TitleBar from "./Components/titlebar";
import Topbar from "./Components/Topbar";
import { FaRegCompass } from 'react-icons/fa';
import {
  
  BsMessenger,

} from "react-icons/bs";
import {
  AiTwotoneStar,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {
    BsThreeDots,
    BsFillBellFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
// import { AiFillPlusCircle } from 'react-icons/ai';
import { MdArrowForwardIos, MdCancel } from "react-icons/md";
import { BsFillBookFill } from "react-icons/bs";
import { FaCarAlt } from "react-icons/fa";
import "./Campaigneditpage.css";
// import "./titlebar.css";
import { GiBeachBag } from "react-icons/gi";
import { HiDownload } from "react-icons/hi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Campaigneditpage() {

    const [CampaignName, setCampaignName] = useState("");
    const [Startdate, setStartdate] = useState("");
    const [Enddate, setEnddate] = useState("");
    const [Status, setStatus] = useState("");
    const [Owner, setOwner] = useState("");
    const [ParentCampaign, setParentCampaign] = useState("");
    const [show, setShow] = useState(false)
    const [Error1, setError1] = useState("")
    const [Error2, setError2] = useState("")
    const [Error3, setError3] = useState("")
    const [Error4, setError4] = useState("")
    const [Error5, setError5] = useState("")
    const [Error6, setError6] = useState("")
    const [Error7, setError7] = useState("")
    const [Error, setError] = useState("")
    const [arrayData, setArrayData] = useState([]);
    const [arrayData1, setArrayData1] = useState([]);
    const [show1, setShow1] = useState(false)
    const handleclick1 = (e) => {
        setShow1(!show1)
    };

    const handleclick = (e) => {
        setShow(!show)
        const url = "http://localhost:3000/dev/getsinglelead";
        const data = {};
        const Headers = {};
        axios.post(url, data, { Headers: Headers })
            .then((res) => {
                console.log("Response of array==>" + JSON.stringify(res.data));
                // for (const temp of res.data) {
                //     temp.isclicked = false
                // }
                setArrayData(res.data)
                console.log("Array== " + JSON.stringify(arrayData))
            })
            .catch((err) => {
                console.log("Error==>" + err);
            });
    };
    // const [error, setError] = useState("");

    const Saveclick = (e) => {
        // setError("")
        // if (CampaignName == "" || Startdate == "" || Enddate == "" || Status == "" || Owner == "" || ParentCampaign == "") {
        //     setError(true)
        // } else if (CampaignName != "" && Startdate != "" && Enddate != "" && Status != "" && Owner != "" && ParentCampaign == "") {
        setError1("")
        setError2("")
        setError3("")
        setError4("")
        setError5("")
        setError6("")
        setError7("")
        // const token = localStorage.getItem("tokenvariable");
        const url = "http://localhost:3000/dev/updateCampaign";
        const data = { CampaignName: CampaignName, Startdate: Startdate, Enddate: Enddate, Status: Status, Owner: Owner, ParentCampaign: ParentCampaign, "id": "3" }
        const header = {};
        axios.post(url, data, header)
            .then((res) => {
                console.log("Response==> " + JSON.stringify(res.data))
                let result = res.data + ""
                if (result.includes("CampaignName is mandatory"))
                    setError1("CampaignName is mandatory!!!")
                if (result.includes("Startdate is mandatory")) {
                    setError2("Startdate is mandatory!!!")
                }
                if (result.includes("Enddate  is mandatory")) {
                    setError3("Enddate  is mandatory!!!")
                }
                if (result.includes("Status  is mandatory")) {
                    setError4("Status  is mandatory!!!")
                }
                if (result.includes("Owner  is mandatory")) {
                    setError5("Owner  is mandatory!!!")
                }
                if (result.includes("ParentCampaign  is mandatory")) {
                    setError6("ParentCampaign  is mandatory!!!")
                }
                if (result.includes("updated")) {
                    setError7("Updated")
                }



            })
            .catch((err) => {
                console.log("Error==> " + err)
            })
        // alert("Updated")
    }

    useEffect(() => {
        const url = "http://localhost:3000/dev/getsingleCampaign";
        const data = {
            "id": "3",
        };
        const header = {};
        axios.post(url, data, header,)
            .then((res) => {
                console.log("Response==>" + JSON.stringify(res.data))


                console.log(res.data[0])
                if (res.data.length > 0) {
                    setCampaignName(res.data[0].txtCampaignName)
                    setStartdate(res.data[0].dtStartdate)
                    setEnddate(res.data[0].dtEnddate)
                    setStatus(res.data[0].txtStatus)
                    setOwner(res.data[0].txtOwner)
                    setParentCampaign(res.data[0].txtParentCampaign)


                }
            })
            .catch((err) => {
                console.log("Response==> " + JSON.stringify(err))
            })
    }, [])

    useEffect(() => {
        const url = "http://localhost:3000/dev/leadfetch";
        const data = {};
        const header = {};
        axios.post(url, data, header,)
            .then((res) => {
                console.log("Response==>" + JSON.stringify(res.data))
                setArrayData1(res.data)
                console.log("Array== " + JSON.stringify(arrayData1))
            })
            .catch((err) => {
                console.log("Error==>" + err);
            });
    }, [])


    return (
        <>
            <div className="Campaigneditpage_topbar">
                <div>
                    <div className="Topbar_header">
                        <div className="Topbar_col1">
                            <div className="Topbar_icon_circle">
                                <AiOutlineMenu />

                            </div>
                            <div className="Topbar_Company">
                                <h3>Company</h3>
                            </div>
                        </div>
                        <div className="Topbar_col2" >
                            <ul>
                                <li>Dashboard</li>
                                <li>Accounts</li>
                                <div className="Tobar_col2_on" onClick={(e) => { handleclick1(e) }}><li>Campaigns</li></div>
                                <div className="Tobar_col2_on1" onClick={(e) => { handleclick1(e) }}><li>Leads</li></div>
                                <div className="Tobar_col2_on2" onClick={(e) => { handleclick1(e) }}><li>Prospects</li></div>
                                <li>
                                    <BsThreeDots />
                                </li>
                            </ul>
                        </div>
                        <div className="Topbar_col3">
                            <AiOutlineSearch className="Topbar_searchIcon" />
                            <div className="Topbar_Search_content">
                                <input type={"text"} placeholder="Search Products,Orders and Clients" />
                            </div><MdArrowForwardIos className="Topbar_arrowIcon" />
                        </div>
                        <div className="Topbar_col4">
                            <CgProfile className="Topbar_profileIcon" />
                            <div className="Clayton">
                                <label>Clayton Santos</label>
                            </div>
                        </div>
                        {/* <div className="Topbar_col5">
                            <div className="Topbar_Bell_Circle">
                                <BsFillBellFill className="Topbar_BellIcon" />
                            </div>
                            <div className="Topbar_cancel_circle">
                                <MdCancel className="Topbar_cancelIcon" />
                            </div>
                        </div> */}
                    </div>

                    {
                        show1 ? (

                            <div className="Topbar_content">
                                <div className="Topbar_content_cola">
                                    <div className="Topbar_content_cola_list">
                                        <BsFillBookFill className="Topbar_bookicon" />
                                        <label> Leads</label>
                                    </div>
                                    <div className="Topbar_content_cola_list">
                                        <BsFillBookFill className="Topbar_bookicon" />
                                        <label> Campaign</label>
                                    </div>
                                    <div className="Topbar_content_cola_list">
                                        <BsFillBookFill className="Topbar_bookicon" />
                                        <div className="Tobar_col2_Tasks" onClick={(e) => { handleclick1(e) }}><label>Tasks</label></div>
                                    </div>
                                    <div className="Topbar_content_cola_list">
                                        <BsFillBookFill className="Topbar_bookicon" />
                                        <label>Prospects</label>
                                    </div>
                                    <div className="Topbar_content_cola_list1"></div>
                                    <div className="Topbar_content_cola_list1"></div>
                                    <div className="Topbar_content_cola_list1"></div>
                                    <div className="Topbar_content_cola_list1"></div>
                                    <div className="Topbar_content_cola_list1"></div>
                                </div>


                                <div className="Topbar_col2_Leadpopup">
                                    <div className="Topbar_content_colb">
                                        <label className="Topbar_label_head">Leads</label>

                                        <div className="Topbar_content_colb_list">
                                            <div className="Topbar_content_colb_list1">
                                                <FaCarAlt className="Topbar_caricon" />
                                                <div className="Tobar_col2_listlead" onClick={(e) => { handleclick1(e) }}><label>List Leads</label></div>
                                            </div>
                                            <div className="Topbar_content_colb_list1">
                                                <BsFillBookFill className="Topbar_bookicon" />
                                                <label>Create Lead</label>
                                            </div>
                                        </div>

                                    </div>
                                </div>






                                <div className="Topbar_col2_Campaignpopup">
                                    <div className="Topbar_content_colc">
                                        <label className="Topbar_label_head">Campaign</label>
                                        <div className="Topbar_content_colb_list">
                                            <div className="Topbar_content_colb_list1">
                                                <BsFillBookFill className="Topbar_bookicon" />
                                                <div className="Tobar_col2_listcampaign" onClick={(e) => { handleclick1(e) }}> <label>List Campaign</label></div>
                                            </div>
                                            <div className="Topbar_content_colb_list1">
                                                <BsFillBookFill className="Topbar_bookicon" />
                                                <label>Create Campaign</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="Topbar_col2_prospectpopup">
                                    <div className="Topbar_content_cold">
                                        <label className="Topbar_label_head">Prospect</label>
                                        <div className="Topbar_content_colb_list">
                                            <div className="Topbar_content_colb_list1">
                                                <BsFillBookFill className="Topbar_bookicon" />
                                                <div className="Tobar_col2_listprospect" onClick={(e) => { handleclick1(e) }}><label>List Prospect</label></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}


                </div>

                <div className="Campaigneditpage_topbar2">
                    <div className="Campaigneditpage_topbar2_left">
                        <div>
                            <div className="leftbar">
                                <div className="leftbar_whitecircle1">
                                    <FaRegCompass />
                                </div>
                                <div className="leftbar_whitecircle2">
                                    <AiTwotoneStar />
                                </div>
                                <div className="leftbar_whitecircle3">
                                    <BsMessenger />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Campaigneditpage_topbar2_right">
                        <div className="Campaigneditpage_topbar2_right_1">
                            <div className="Campaigneditpage_topbar2_right_1_1">
                                <div>
                                    <div className="titlebar_top">
                                        <div className="titlebar_top_col1">
                                            <div className="titlebar_bagSquare">
                                                <GiBeachBag className="titlebar_bagIcon" />
                                            </div>
                                            <label><b>Campaign One</b></label>
                                        </div>
                                        <div className="titlebar_top_col2">
                                            <div className="titlebar_top_col22">
                                                <BsFillPlusCircleFill className="titlebar_plusIcon" />
                                                <label onClick={(e) => {
                                                    Saveclick(e);
                                                }} >Save</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Campaigneditpage_topbar2_right_1_2">
                                <div>
                                    <div className="form_outer">
                                        <div className="form_inner1">
                                            {/* <label>Lead Details</label> */}
                                        </div>
                                        <label className="Error7">{Error7}</label>
                                        <div className="form_inner3">
                                            <div className="form_inner31">

                                                <label className="text">CampaignName</label><br />
                                                <input className="form_rectangle" type="text" placeholder="" value={CampaignName} onChange={(e) => { setCampaignName(e.target.value) }} />
                                                <label className="Err">{Error1}</label>
                                            </div>

                                            <div className="form_inner31">
                                                <label>Parent Campaign</label><br />
                                                <input className="form_rectangle" type="text" placeholder="" value={ParentCampaign} onChange={(e) => { setParentCampaign(e.target.value) }} />
                                                <label className="Err">{Error6}</label>
                                            </div>
                                            <div className="form_inner31">
                                                <label>Status</label><br />
                                                <input className="form_rectangle" type="text" placeholder="" value={Status} onChange={(e) => { setStatus(e.target.value) }} />
                                                <label className="Err">{Error4}</label>
                                            </div>
                                        </div>
                                        <div className="form_inner3">
                                            <div className="form_inner31">
                                                <label>Start Date</label><br />
                                                <input className="form_rectangle" type="text" placeholder="" value={Startdate} onChange={(e) => { setStartdate(e.target.value) }} />
                                                <label className="Err">{Error2}</label>
                                            </div>
                                            <div className="form_inner31">
                                                <label>End Date</label><br />
                                                <input className="form_rectangle" type="text" placeholder="" value={Enddate} onChange={(e) => { setEnddate(e.target.value) }} />
                                                <label className="Err">{Error3}</label>
                                            </div>
                                            <div className="form_inner31">
                                                <label>Owner</label><br />
                                                <input className="form_rectangle" type="text" placeholder="" value={Owner} onChange={(e) => { setOwner(e.target.value) }} />
                                                <label className="Err">{Error5}</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="Campaigneditpage_topbar2_right_2">
                            <div className="Campaigneditpage_topbar2_right_2_left">
                                <div>
                                    <div className="Normallist">
                                        <div className="Normallist_row1">
                                            <label className="Normallist_row1_label">Leads</label>
                                            <div className="Normallist_row1_button">
                                                <button onClick={(e) => { handleclick(e) }} >ADD</button>
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
                                            {arrayData1.map((item1, index) => {
                                                return <Table item1={item1} arrayData1={arrayData1} setArrayData1={setArrayData1} />
                                            })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>{

                            }
                            {
                                show ? (
                                    <div className="checkList_outer">
                                        <div className="checkList_inner1">
                                            <div className="checkList_inner11">
                                                <BiSearch className="checkList_searchIcon" />
                                                <input type={"text"} placeholder="Search Lead" />
                                            </div>
                                            <div className="checkList_inner12">
                                                <label>ADD</label>
                                            </div>
                                        </div>
                                        <div className="checkList_outer_inner2">
                                            {/* <div className="checkList_inner2"> */}
                                            {/* <input type={"checkbox"} className="checkBox" /> */}
                                            {/* <label>Campaign One</label> */}
                                            {/* </div> */}
                                            <div>
                                                {arrayData.map((item, index) => {
                                                    return <List item={item} arrayData={arrayData} setArrayData={setArrayData} />
                                                })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            <div className="Campaigneditpage_topbar2_right_2_right">
                                <Horizontalbar />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )

}


function Table(item1, arrayData1, setArrayData1) {
    const d = new Date(item1.item1.dtUpdatedOn);
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    // console.log("item" + JSON.stringify(item1))
    return <>
        <div className="Normallist_row5">
            <label>{item1.item1.txtFirstName}</label>
            <label>{item1.item1.txtLastName}</label>
            <label>{item1.item1.txtLeadsource}</label>
            <label>{year}-{month}-{day}</label>
        </div>
    </>
}
function List(item, arrayData, setArrayData) {

    // let temp=[...arrayData];
    // for (const iterator of temp) {
    // //   if(itm.FirstName === iterator.FirstName){
    // //     iterator.isclicked=!iterator.isclicked;
    // //   }
    // }
    // setArrayData(temp)
    console.log("item" + JSON.stringify(item))
    return (
        <>
            <div className="checkList_inner2">
                <input type={"checkbox"} className="checkBox" />
                <label>{item.item.txtFirstName}</label>
            </div>
        </>
    );
}

