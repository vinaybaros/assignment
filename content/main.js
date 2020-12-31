import React from 'react';

import './main.css'; 

const MainPage = (props) => {
    
    return(
        <div className="mainpage">
            <div className="topBar">
                <h2 className="title">Overview</h2>
                <div>
                    <span>
                        <i></i><i></i><i></i>
                    </span>
                    <ul>
                        <li><a href="">Inbox</a></li>
                        <li><a href="">Sent</a></li>
                        <li><a href="">Drafts</a></li>
                        <li><a href="">Settings</a></li>
                    </ul>
                </div>
            </div>
            <figure className="graph">
                <img src={"images/graph.png"} />  
            </figure>
            <div className="users">
                <table>
                    <thead>
                        <tr>
                            <th>Users</th>
                            <th>Status</th>
                            <th>Users</th>
                            <th>Impression</th>
                            <th colspan="2">Conversion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <figure>
                                    <img src={"images/user01.png"} />  
                                </figure>
                                <span>Robert Johnstons</span>
                            </td>
                            <td>
                                <span className="btn btnPaused">Paused</span>
                            </td>
                            <td>
                                <span>189</span>
                                <p>Total users</p>
                            </td>
                            <td>
                                <span>324324</span>
                                <p>Total impressions</p>
                            </td>
                            <td>
                                <span>2342</span>
                                <p>Converted users</p>
                            </td>
                            <td>
                                <span>
                                    <i></i><i></i><i></i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <figure>
                                    <img src={"images/user02.png"} />                                   
                                </figure>
                                <span>Anna Atkinsone</span>
                            </td>
                            <td>
                                <span className="btn btnActive">Active</span>
                            </td>
                            <td>
                                <span>231</span>
                                <p>Total users</p>
                            </td>
                            <td>
                                <span>21325</span>
                                <p>Total impressions</p>
                            </td>
                            <td>
                                <span>221</span>
                                <p>Converted users</p>
                            </td>
                            <td>
                                <span>
                                    <i></i><i></i><i></i>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <figure>
                                    <img src={"images/user03.png"} />  
                                </figure>
                                <span>Mark Atkinsone</span>
                            </td>
                            <td>
                                <span className="btn btnActive">Active</span>
                            </td>
                            <td>
                                <span>254</span>
                                <p>Total users</p>
                            </td>
                            <td>
                                <span>222413</span>
                                <p>Total impressions</p>
                            </td>
                            <td>
                                <span>4535</span>
                                <p>Converted users</p>
                            </td>
                            <td>
                                <span>
                                    <i></i><i></i><i></i>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
    )
    
}

export default MainPage 