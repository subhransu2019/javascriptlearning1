import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import'./css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
      <view>
     <body style={{fontSize:'10px',fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>

    <div className="container">
    <ul style={{paddingLeft:'center',paddingTop:'20px',paddingBottom:'-80px',fontSize:'12px',borderBottomStyle:'solid',borderWidth:'.05px'}}>
        <li><a href="invite users" id="active">INVITE USERS</a></li>
        <li><a href="#manage users">MANAGE USERS</a></li>
        <li><a href="#faqs">FAQS</a></li>
        <li><a href="#reminder time">RIMNDER TIME</a></li>
        <li><a href="#reports">REPORTS</a></li>
    </ul>
     <br/>
    <table style={{paddingTop:'20px',paddingBottom:'20px'}}>
        <tr>
            <td style={{paddingRight:'150px'}}>PERSONA TYPE</td>
            <td>
                <select name="regional admin" id="ra"style={{borderRadius:'4px',fontSize:'10px',height:'30px',width:'130px'}}>
                    <option value="regional admin" >Regional admin</option>
                </select>
            </td>
        </tr>
    </table>

</div>
<hr/>

<table style={{margin: '0px', paddingTop: '10px',paddingBottom:'10px'}}>
<tr>
    <td style={{paddingRight:'100px'}}>PERSONAL INFORMATION</td>
    <td style={{color:'gray',paddingLeft: '10px'}}>FIRST NAME</td>
    <td style={{color:'gray', paddingLeft:'30px'}}>LAST NAME</td>
    <td style={{color:'gray', paddingLeft:'30px'}}>EMAIL</td>
</tr>
<tr>
    <th></th>
    <th style={{paddingLeft:'0px'}}>
        <input type="text"name="first_name"></input>
        style={{borderStyle:'ridge',borderRadius:'4px',height:'30px'}}>
    </th>
    <th style={{paddingLeft:'20px'}}>
        <input type="text"name="last_name"></input>
        style={{borderStyle:'ridge',borderSadius:'4px', height: '30px'}}>
    </th>
    <th style={{paddingLeft:'20px'}}>
        <input type="text"name="email"></input>
        style={{borderStyle:'ridge',borderRadius:'4px', height: '30px'}}>
    </th>
</tr>
</table>
<br/>
<table style={{paddingLeft:'222px',paddingBottom:'20px'}}>
    <tr>
        <td style={{color: 'gray',paddingRight: '150px'}}>COUNTRY</td>
        <td style={{color:'gray',paddingRight: '10px'}}>PREFERED LANGUAGE </td>
    </tr>
    <tr>
        <td>
            <select name="country" id="country"style={{fontSize:'10px',borderRadius:'4px',fontSize:'10px',height: '30px',width:'155px'}}>
            <option value="select country">select country</option>
            <option value="india">INDIA</option>
            <option value="aus">AUS</option>
            <option value="srilanka">SRILANKA</option>
            <option value="pakistan">PAKISTAN</option>
            <option value="brazil">BRAZIL</option>
            <option value="chilly">CHILLY</option>
        </select>
        </td>
        <td><input className="activate" type="radio"name="LANGUAGE"value="English"style={{backgroundColor:'green'}}></input>                                                                                    ; margin-right:6px;"checked>
            <label style={{paddingRight:'20px'}} for="English">English</label>
            <input type="radio"name="LANGUAGE"value="Spanish" style={{marginRight:'6px'}}></input>
            <label for="Spanish">Spanish</label>
        </td>
    </tr>
</table>


<button id="createuser" style={{float:'right',color:'grey',border:'0px',height:'26px',width:'80px',backgroundColor:'#A9A9A9',borderRadius: '3px'}}>create user</button>
</body>
</view>

);
  }
}

