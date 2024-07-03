
import React from 'react'
import Card from './Card'

function FullStackDevelopment() {
    const data = [
        {
            title:'Top Differences: Full Stack Developer vs Software Engineer 2024',
            img:'https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development.webp',
            di:'A Full Stack Developer is a tech all-rounder. They work on both the front and',
            date:'15 November 2024',  
        },
        {
            title:'Top Ways to Assess Soft Skills in Full Stack Developers in 2024',
            di:'Are you interested in becoming a full-stack developer but not sure where to start? In this blog',
            img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.webp',
            date:'3 November 2024',
        },
        {
            title:'7 Best Full-Stack Development Online Courses [2024]',
            di:'Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand',
            img:'https://www.guvi.io/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp',
            date:'12 July 2024',
        },
        {
            title:'Best Books to Learn Full-Stack Development',
            di:'Are you interested in becoming a full-stack developer but not sure where to start? In',
            img:'https://tse2.mm.bing.net/th?id=OIP.6NEqeSkxgEjYiHYUAkdZXwHaEK&pid=Api&P=0&h=180',
            date:'12 May 2024',
        },
        {
            title:'Web Components: A Deep Dive into Reusable and Custom Elements [2024]',
            di:'As a full-stack developer, have you ever got bored of using the same HTML, CSS,',
            img:'https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp',
            date:'15 April 2024',
        },
        {
             title:'Top 10 Product-Based Companies for Full-Stack Developers [2024]',
             di:'In the dynamic landscape of technology, full-stack developers are the architects of the digital world',
             img:'https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp',
             date:'15 October 2024',
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

export default FullStackDevelopment