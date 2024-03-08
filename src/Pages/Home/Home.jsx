import React from 'react'
import './home.css'
import { Link as Anchor } from 'react-router-dom'
import logo from "../../Img/logo.png"

export default function Home() {

  return (
    <div className='home'>
      <div className="logoCatalogo">
        <div className="logoResenia">
          <img src={logo} alt="" />
          <h1>Titulo</ h1>
          <p className='resenia'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla doloremque nobis quia porro quibusdam blanditiis numquam, facere quas excepturi commodi nisi dolore iste unde quasi voluptatem quod facilis fugit et!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime maiores porro alias non, ea molestiae beatae distinctio sint iure totam delectus necessitatibus sit culpa exercitationem eveniet deserunt voluptatibus id? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim non est minus minima quo eligendi, voluptas praesentium numquam mollitia dolore quidem facere ut quae! Ab quod doloribus deleniti consequuntur ad! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est soluta consequatur maiores fugit repellat quisquam sunt magni corrupti, quae fuga similique, voluptates quidem modi voluptatum id at laudantium velit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas impedit incidunt nostrum ipsa id odio quaerat voluptate quia, delectus labore ad laudantium voluptatibus recusandae. Fuga non ex libero dicta!</p>
        </div>
      </div>
    </div>
  )
}
