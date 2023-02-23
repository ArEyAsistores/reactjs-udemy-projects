import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Expierence = ({expierence, selectedTab}) => {

    const contentList = expierence.filter((ex) => ex.company === selectedTab).map((data, index) => {
        const { company, dates, duties, id, order, title } = data;
        console.log(data);
        return(
            <article className="job-info" key={ index }>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
                {
                    duties.map((d, index) =>{
                       return(
                        <div className="job-desc" key={index}>
                            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                            <p>{d}</p>
                        </div>
                       )
                    })
                }
            </article>
        )
    })
   
  return (
   <>
   {contentList}
   </>
  )
}

export default Expierence