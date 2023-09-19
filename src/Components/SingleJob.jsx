import React from "react"
import { useState } from "react"
import shortly from '../images/shortly.svg'



const SingleJob = (props) => {

  const {
    id,
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
  } = props

 console.log(logo)


let keywords = [role, level,...languages,...tools]
  /*const [icon, setIcon] = useStat(''); */


  return (
    <div className='job-container'>
      <div className='logo' key={id}>
        <img src={logo} alt=''  width={'400px'} height={'auto'}/>
      </div>

      <div className='part1'>
        <div className='company'>
          <div className='cname'>{company}</div>
          {props.new && <span className='new'>new!</span>}
          {props.featured && <span className='new'>featured!</span>}
        </div>

        <div className='position'>{position}</div>
        <div className='details'>
          <span>{postedAt}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{contract}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{location}</span>
        </div>
      </div>

      <div className='part2'>
        {keywords.map((key,id)=>(
          <button key={id}>{key}</button>
        ))}
      </div>
    </div>
  );
}
export default SingleJob
