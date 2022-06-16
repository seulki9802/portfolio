import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import project0 from '../assets/project_donut0.jpeg'
import project01 from '../assets/project_donut1.jpeg'
import project02 from '../assets/project_donut2.jpeg'
import project03 from '../assets/project_donut3.jpeg'
import project04 from '../assets/project_donut4.jpeg'


import project1 from '../assets/project_board0.jpeg'
import project11 from '../assets/project_board1.jpeg'
import project12 from '../assets/project_board2.jpeg'
import project13 from '../assets/project_board3.jpeg'
import project14 from '../assets/project_board4.jpeg'

import project2 from '../assets/project_portfolio0.jpeg'
import project21 from '../assets/project_portfolio1.jpeg'
import project22 from '../assets/project_portfolio2.jpeg'
import project23 from '../assets/project_portfolio3.jpeg'


import git from '../assets/git.png'
import home from '../assets/home.png'



const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
    },
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  }
};

const projects = [
  {
    id: 0,
    title: 'Eat donut!',
    link: 'http://localhost:8888',
    git: 'https://github.com/seulki9802/game',
    introduction: '채소를 피해 도넛을 먹는 게임!',
    skills: 'HTML, JavaScript, Node.js, MongoDB', 
    description: '\v 키보드로 동작하며 점수를 올려 랭킹을 갱신하는 게임입니다.\n\n\v 게임 제작을 위해 html의 canvas 태그를 이용하고 랭킹 시스템을 위해 Node.js와 mongoDB를 사용하였습니다.\n\n\v 이 게임은 이전에 html과 js만으로 제작을 완료하였지만 React와 Node.js를 연결하는 데 공부하기 위하여 프로젝트를 재구성하여 만들었습니다.\n\n\v React로 게임의 첫 화면인 닉네임을 입력하는 페이지와 랭킹 확인 페이지를 제작하였으며 페이지의 요소를 나누어 제작할 수 있는 React의 편리성과 장점을 체감할 수 있었습니다.' ,
    img: [ { id: 0, img: project0 }, { id: 1, img: project01 }, { id: 2, img: project02 }, { id: 3, img: project03 }, {id: 4, img: project04 } ]
  },
  {
    id: 1,
    title: 'BOARD',
    link: 'http://localhost:7777',
    git: 'https://github.com/seulki9802/board',
    introduction: '친구들과 함께 BOARD에 메모해 보세요!',
    skills: 'JavaScript, React, Node.js, socket.io, MongoDB, CSS',
    description:'\v 실시간으로 메모를 공유하고 좋아요를 누를 수 있는 웹사이트 입니다. \n\n\v 회원가입 기능을 도입하여 비회원과의 차이점을 두었습니다. 회원은 회원 전용 게시글을 쓸 수 있고 본인만 게시글을 삭제할 수 있는 권한을 가집니다. 그리고 좋아요 알림을 받는 기능을 이용할 수 있습니다. \n\n\v 이 프로젝트를 만들면서 새로고침 없는 실시간 업데이틀 위해 React와 socket.io를 이용하였으며 회원관리와 게시글을 저장하기 위해 mongoDB를 이용하였습니다. 또한 보안을 위해 passport 라이브러리를 사용하여 회원의 비밀번호를 암호화 하였습니다.\n\n\v 작은 프로젝트 이지만 여러모로 욕심이 났던 프로젝트입니다. 이전의 커뮤니티 같은 todoApp을 만든 경험이 있는데 이를 보다 더 보기 쉽게 만들 수는 없을까 고민하며 즉각적이고 가시성이 좋도록 만들었습니다. 추가하고 싶은 기능이 잔뜩 있으나 개인의 역량으로 가볍게 관리할 수 있는 수준까지 만들었습니다. 팀 프로젝트를 하며 보다 큰 웹 사이트를 만들면 재밌겠다고 느꼈습니다.',
    img: [ { id: 0, img: project1 }, { id: 1, img: project11 }, { id: 2, img: project12 }, { id: 3, img: project13 }, { id: 4, img: project14 } ]
  },
  {
    id: 2,
    title: 'Portfolio',
    link: 'http://localhost:3000',
    git: 'https://github.com/seulki9802/portfolio',
    introduction: '유슬기의 포트폴리오입니다.',
    skills: 'JavaScript, React, Node.js, MongoDB, CSS',
    description: '\v 저의 가치관과 개성을 담을 수 있는 페이지를 만들었습니다.\n\n\v 저에게 웹 페이지란 가독성 좋은 문서이자 사용자가 경험할 수 있는 문서입니다. 기존의 문서들은 페이지들 간의 상호작용이 어렵다는 단점이 있습니다. 그러나 웹은 이를 극복하고 많은 문서를 보다 구조적으로 손 쉽게 열람할 수 있도록 합니다.\n\n\v 이를 위해 저는 페이지를 여러 개로 나누고 페이지간의 이동이 용이하도록 하며 애니메이션을 추가하여 사용자의 경험에 도움이 될 수 있도록 구성하였습니다. \n\n\v React를 처음 공부하며 만든 프로젝트이며 페이지를 나누고 요소들을 나누면서 React를 공부하고 React의 장점과 단점을 경험할 수 있는 프로젝트였습니다.',
    img: [ { id: 0, img: project2 }, { id: 1, img: project21 }, { id: 2, img: project22 }, { id: 3, img: project23 } ]

  }
]

function Project() {

  document.querySelector('body').style.backgroundColor = '#D59BF6';

  const [project, setProject] = useState(projects[0])
  const [show, setShow] = useState(false);

  return(
    <div className="Project">

      {show
      ? <ProjectShow setShow={ setShow } setProject={ setProject } project={ project } />
      : <PorjectList setShow={ setShow } setProject={ setProject } />}

    </div>
  )
}

function PorjectList({ setShow, setProject }) {

  function projectShow(id) {
    setProject(projects[id])
    setShow(true)
  }
  
  return(
    <motion.ul
    className="Project-list-container"
    variants={ container }
    initial="hidden"
    animate="visible"
    >

      {projects.map((project) => (
        <motion.li key={ project.id } className="Project-item" variants={ item } onClick={ () => projectShow(project.id) }>
          <img src={ project.img[1].img } alt={ project.title } ></img>
          <h3>{ project.title }</h3>
          <p>{ project.introduction }</p>

        </motion.li>
      ))}

    </motion.ul>
  )
}

function ProjectShow({ setShow, setProject, project }) {

  const [img, setImg] = useState(project.img[0]);
  useEffect( () => { setImg(project.img[0]) }, [project])

  function next() {
    if (project.id === projects.length - 1) setProject(projects[0])
    else setProject(projects[project.id + 1])
  }

  function prev() {
    if (project.id === 0 ) setProject(projects[projects.length - 1])
    else setProject(projects[project.id - 1])
  }

  function nextImg() {
    if (img.id == project.img.length - 1) return setImg(project.img[0])
    setImg(project.img[img.id + 1])
  }

  return(
    <>
      <motion.div key={ project.id } className='Project-show-container' initial={{ scale: 0 }} animate={{ scale :1 }}>

        <h1>{ project.title }</h1>

        <div className='Project-show-image'>
          <img src={ img.img } alt={ project.title } />
          <span> {img.id + 1}/{project.img.length}</span><br/>
          <button onClick={ nextImg }>다음 이미지 보기</button>
        </div>
        

        <div className='Project-show-go'>
          <a href={ project.link } target='_blank' rel='noopener noreferrer'><img src={ home } alt='home' /></a>
          <a href={ project.git } target='_blank' rel='noopener noreferrer'><img src={ git } alt='git' /></a>
        </div>

        <p>{ project.skills }</p>
        <p style={ { whiteSpace: 'pre-line', textAlign: 'left' } }>{ project.description }</p>

        <button className='Project-show-prev' onClick={ prev }>←</button>
        <button className='Project-show-next' onClick={ next }>→</button>
        <button className='Project-show-exit' onClick={ () => setShow(false) }>✕</button>

      </motion.div>

    </>
  )
}
  
  
export default Project;
  
