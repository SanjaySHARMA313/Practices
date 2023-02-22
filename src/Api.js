import React, { useState, useEffect } from 'react'
const Task = () => {
 const editText = (row, col, str) => {
        let obj = { ...data }
        obj[row][col] = str;
        setData(obj);
    }
      const [data, setData] = useState("");
    useEffect(() => {
        let data = {};
        let headArray = ["Onboarding Call", "Google Search Console Access", "Google Analytics Access", "Website Access",
            "Technical Audit", "Anchor Text and Semantic Analysis", "Competitor Analysis", "Anchor Text/ URL Mapping", "Google Data Studio Report + Local Reporting Suite", "Site Level Optimization",
            "On Page Optimization", "Content Creation", "Content Publishing", " Premium Press Release", "Authority Niche Placements", "Review Management", "Index Links", " Video Recap"

        ]
        for (let i = 0; i < headArray.length; i++) {

            data[i] = {};
            data[i][0] = headArray[i]
            for (let j = 1; j < 6; j++) {
                data[i][j] = "";
            }
        }
        setData(data);

    }, [])
    return (
        <div>
            {
                data && Object.keys(data).map((row) => {
                    return (
                        <div key={row} style={{ display: "flex", flexDirection: "row" }}>
                            {
                                Object.keys(data[row]).map((col) => {
                                    return (

                                        <div key={col} style={{ display: 'flex', border: "2px solid black", flex: 1 }}>

                                            <input style={{ width: "100%" }} type="text" value={data[row][col]} onChange={(e) => { editText(row, col, e.target.value) }} className='tt'></input>


                                        </div>

                                    )
                                })
                            }
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Task



