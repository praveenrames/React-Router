
import React from 'react'
import Card from './Card'

function DataScience() {
    const data = [
        {
            title:'Best Data Science Books to Learn in 2024',
            di:'Today, we’re going to talk about something really cool: data science. It’s all about using',
            img:'https://tse3.mm.bing.net/th?id=OIP.VB0aKBfzeaOTb4wfCZOvJAHaEo&pid=Api&P=0&h=180',
            date:'15 June 2024', 
        },
        {
            title:'Impact of Certification Programs on Hiring Data Scientists',
            di:'Data scientists are the creators behind transforming the raw data into edible data insights. These',
            img:'https://www.guvi.in/blog/wp-content/uploads/2023/11/In-Article-Image-1-1200x600.webp',
            date:'15 May 2024',
        },
        {
            title:'What is the Difference between Data Science and Data Engineering?',
            di:'India has been making some serious waves in the world of data. Just like the',
            img:'https://www.guvi.io/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp',
            date:'15 April 2024',
        },
        {
            title:'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
            di:'Are you someone who’s not interested in coding, but wants to get placed in tech',
            img:'https://tse2.mm.bing.net/th?id=OIP.qyrzaFtNQClriYc0lbYcUQHaDh&pid=Api&P=0&h=180',
            date:'12 September 2024',
        },
        {
            title:'Top Product-Based Companies for Data Science Freshers',
            di:'In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing',
            img:'https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp',
            date:'15 August 2024',
        },
        {
            title:"What is the Difference between Data Science and Data Engineering?",
            di:"India has been making some serious waves in the world of data. Just like the",
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
            date:"15 April 2024",
        }
    ]
  return (
    <div className='container'>
    <div className='row'>
    {
        data.map((e,i)=>{
          return <Card cardData={e} key={i}/>
        })
      }
    </div>
 </div>
  )
}

export default DataScience