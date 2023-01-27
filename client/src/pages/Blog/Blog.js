import React, { useState } from 'react'
import HomeButton from '../../components/Buttons/HomeButton';
import Loader from '../../components/Loader/Loader';
import "./Blog.css"

const Blog = () => {
    const [blog, setBlog] = useState({
        title:"Blog Title 1",
        content:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tenetur esse incidunt ex aut neque dolor architecto autem dolorum necessitatibus explicabo mollitia totam ipsum aperiam blanditiis veritatis, iure tempora dolores.
        Laborum dolore officiis sint, commodi vitae dolorum doloribus! Sapiente assumenda, aliquam doloribus tempora perferendis ducimus ab vel, excepturi fugit soluta, unde fuga atque veritatis? Ducimus rem aperiam saepe dolor similique?
        Corporis obcaecati cumque voluptate, beatae exercitationem dignissimos ipsam similique dicta? Voluptates impedit deleniti veritatis animi commodi? Quidem ad cum quam, laboriosam dicta itaque, ea quae asperiores doloribus praesentium dolore quo.
        Praesentium ducimus sed facilis corrupti autem. Distinctio deserunt quas sunt inventore veritatis quae consectetur. Unde perferendis quod architecto ab nisi in, illum veritatis obcaecati accusantium maxime tempore numquam, natus facilis!
        Cumque dolorum ab atque ratione sunt dicta fugiat accusantium beatae sapiente libero. Doloribus odio quis, facere expedita minus dolorem voluptas atque tenetur consequuntur totam porro autem dolor ipsa deleniti eos!
        Deleniti, eos eveniet nulla reprehenderit placeat minus in maiores molestias debitis illo illum rerum sit at, cumque, a totam quod voluptate. Explicabo officiis placeat, quibusdam nisi tempora vero at autem?
        Totam ullam itaque esse eligendi aut iste repellat eaque atque sapiente. Eos magnam pariatur nostrum assumenda voluptatum, accusamus, facere iure similique officiis quae dolores doloremque fugiat placeat incidunt ullam? Voluptatum!
        Ea asperiores accusantium soluta, similique minus itaque incidunt qui temporibus obcaecati? Optio rem consectetur tempora exercitationem? Dicta, sed? Illo iusto doloremque quia nemo ab assumenda quam ad mollitia, sequi dicta.
        Aliquam esse provident eligendi delectus, numquam optio officia nemo totam rem hic velit placeat, voluptate, itaque sint eos pariatur? Laboriosam consequatur voluptate ipsa! Ad alias, facilis placeat magni tempore atque?`
    });
    
    return (
        
            !blog?<Loader/>:<div id='blog'>
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
                <HomeButton/>
            </div>
        
    )
}

export default Blog