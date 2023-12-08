import pfp from '../../../public/me.jpg';
import Image from 'next/image';
import './about.css';

//import { useEffect } from "react";
//const AOS = require('aos');

const About = () => {
    {/*useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);*/}

    return (
        <div className="about">
            <div className="circle">
                <span className="circle__btn">
                    <Image src={pfp} alt="Sadiq Image"/>
                </span>
                {/*<span className="circle__back-1"></span>
                <span className="circle__back-2"></span>*/}
            </div>
            <div className="text">
                <p id='hello'><span><hr id='hello-hr'/></span> Hello </p>
                <p id="name">I'm Mohammad <strong style={{color:'aquamarine'}}>Sadiq</strong></p>
                <p className="title">Passionate Problem Solver</p>
                <p className='description'>  A logical and creative thinker, I love solving problems. <br />   
                        Web3 practitioner, Full Stack developer.</p>
                <br />                
                <div className="socials">
                    <hr />
                    <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                        <a href="https://github.com/MdSadiqMd" target="_blank" title="Github">
                            {/*<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 13.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 7 12 7s5 2.358 5 6.5z"></path>
                                <path d="M12 16.5v-2.902a2.53 2.53 0 00-.705-1.958c2.355-.263 4.83-1.155 4.83-5.25A4.08 4.08 0 0015 3.578 3.803 3.803 0 0014.932.75S14.047.487 12 1.86a10.035 10.035 0 00-5.25 0C4.702.487 3.817.75 3.817.75a3.803 3.803 0 00-.067 2.827 4.08 4.08 0 00-1.125 2.835c0 4.065 2.475 4.958 4.83 5.25a2.528 2.528 0 00-.705 1.935V16.5m0-2.25C3 15.375 3 12.375 1.5 12l5.25 2.25z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>*/}
                            <svg xmlns="http://www.w3.org/2000/svg" x="18px" y="18px" width="35" height="35" viewBox="0 0 100 100">
                                <path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"></path><path fill="#e4e4f9" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"></path><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"></path><path fill="#8889b9" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"></path><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"></path><path fill="#8889b9" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"></path><path fill="#fff" d="M18.5 49A2.5 2.5 0 1 0 18.5 54 2.5 2.5 0 1 0 18.5 49zM79.5 32A1.5 1.5 0 1 0 79.5 35 1.5 1.5 0 1 0 79.5 32z"></path><g><path fill="#a3a3cd" d="M50 25.625A24.25 24.25 0 1 0 50 74.125A24.25 24.25 0 1 0 50 25.625Z"></path><path fill="#472b29" d="M50,74.825c-13.757,0-24.95-11.192-24.95-24.95S36.243,24.925,50,24.925s24.95,11.192,24.95,24.95 S63.757,74.825,50,74.825z M50,26.325c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.425,50,73.425s23.55-10.564,23.55-23.55 S62.985,26.325,50,26.325z"></path></g><g><path fill="#565fa1" d="M50 29.167A20.5 20.5 0 1 0 50 70.167A20.5 20.5 0 1 0 50 29.167Z"></path></g><g><path fill="#472b29" d="M69.424,44.625c-0.214,0-0.412-0.139-0.478-0.354c-0.088-0.287-0.183-0.571-0.284-0.853 c-0.392-1.094-0.886-2.159-1.47-3.169c-0.139-0.238-0.057-0.545,0.182-0.683c0.239-0.141,0.545-0.057,0.683,0.183 c0.614,1.061,1.134,2.182,1.546,3.331c0.106,0.297,0.206,0.595,0.298,0.897c0.081,0.264-0.067,0.544-0.332,0.625 C69.521,44.618,69.472,44.625,69.424,44.625z"></path></g><g><path fill="#472b29" d="M50,70.75c-11.511,0-20.875-9.337-20.875-20.813S38.489,29.125,50,29.125 c5.975,0,11.674,2.56,15.636,7.023c0.299,0.337,0.588,0.685,0.865,1.041c0.169,0.218,0.13,0.531-0.087,0.701 c-0.218,0.171-0.532,0.131-0.702-0.088c-0.264-0.339-0.54-0.669-0.824-0.99c-3.772-4.25-9.199-6.688-14.888-6.688 c-10.959,0-19.875,8.888-19.875,19.813S39.041,69.75,50,69.75s19.875-8.888,19.875-19.813c0-0.995-0.075-1.996-0.222-2.973 c-0.041-0.272,0.147-0.527,0.42-0.568c0.278-0.045,0.528,0.147,0.569,0.42c0.154,1.025,0.233,2.076,0.233,3.121 C70.875,61.413,61.511,70.75,50,70.75z"></path></g><g><path fill="#fefdef" d="M61.496,42.088c0.365-1.671,0.206-3.743-0.486-5.818c-3.622,0-6.339,2.716-6.339,2.716 s0.016,0.018,0.02,0.023C54.627,39.008,54.565,39,54.5,39h-9c-0.043,0-0.085,0.006-0.128,0.006c0.003-0.004,0.017-0.02,0.017-0.02 s-2.717-2.716-6.339-2.716c-0.684,2.053-0.85,4.104-0.5,5.767C36.973,43.732,36,46,36,48.5c0,5.247,4.253,9.5,9.5,9.5h1.073 c-1.304,0.709-2.246,1.979-2.493,3.498c-1.72,0.232-3.979,0.18-5.028-1.394c-1.811-2.717-2.717-2.717-3.622-2.717 s-0.906,0.906,0,1.811c0.906,0.906,0.906,0.906,1.811,2.717c0.772,1.543,2.812,3.298,6.76,2.663v3.523 c0,0.447,0.079,0.871,0.191,1.282c2.425,0.577,6.502,1.061,11.665-0.151C55.943,68.868,56,68.493,56,68.102v-5.816 c0-1.858-1.047-3.456-2.573-4.286H54.5c5.247,0,9.5-4.253,9.5-9.5C64,46.025,63.046,43.779,61.496,42.088z"></path><path fill="#472b29" d="M49.532,70.486c-2.23,0-4.075-0.287-5.457-0.616c-0.178-0.042-0.319-0.179-0.367-0.355 c-0.142-0.522-0.208-0.972-0.208-1.413V65.15c-4.563,0.514-6.279-2.154-6.707-3.011c-0.87-1.739-0.87-1.739-1.717-2.587 c-0.701-0.701-0.979-1.458-0.745-2.023c0.169-0.408,0.569-0.642,1.098-0.642c1.217,0,2.219,0.211,4.038,2.939 c0.839,1.258,2.676,1.379,4.193,1.218c0.23-0.978,0.724-1.855,1.423-2.554C39.762,58.272,35.5,53.875,35.5,48.5 c0-2.442,0.891-4.78,2.513-6.613c-0.306-1.722-0.108-3.761,0.564-5.775c0.068-0.204,0.259-0.342,0.474-0.342 c3.357,0,5.931,2.16,6.552,2.73h8.854c0.621-0.57,3.195-2.73,6.552-2.73c0.215,0,0.406,0.138,0.474,0.342 c0.679,2.037,0.872,4.096,0.551,5.83c1.591,1.826,2.465,4.146,2.465,6.559c0,5.375-4.263,9.773-9.585,9.991 c1.001,0.997,1.585,2.354,1.585,3.794v5.816c0,0.392-0.052,0.8-0.158,1.246c-0.043,0.185-0.188,0.328-0.372,0.371 C53.582,70.28,51.419,70.486,49.532,70.486z M44.602,68.965c2.412,0.537,6.153,0.9,10.83-0.148 c0.045-0.253,0.068-0.489,0.068-0.715v-5.816c0-1.597-0.886-3.07-2.312-3.846c-0.201-0.109-0.302-0.341-0.246-0.563 c0.056-0.222,0.256-0.377,0.484-0.377H54.5c4.962,0,9-4.037,9-9c0-2.247-0.843-4.404-2.373-6.074 c-0.11-0.12-0.154-0.286-0.12-0.444c0.331-1.517,0.202-3.352-0.36-5.202c-2.87,0.153-5.098,2.074-5.542,2.484 c-0.091,0.151-0.245,0.246-0.429,0.246c-0.007,0-0.096-0.006-0.103-0.006L45.5,39.5c-0.152,0-0.332-0.067-0.442-0.181l-0.021,0.021 c-0.025-0.024-2.438-2.39-5.623-2.561c-0.557,1.831-0.69,3.649-0.373,5.154c0.034,0.159-0.013,0.325-0.124,0.444 C37.358,44.052,36.5,46.227,36.5,48.5c0,4.963,4.038,9,9,9h1.073c0.229,0,0.428,0.155,0.484,0.377 c0.057,0.222-0.044,0.453-0.246,0.563c-1.205,0.654-2.021,1.799-2.238,3.139c-0.036,0.218-0.208,0.386-0.427,0.415 c-2.664,0.358-4.568-0.198-5.511-1.611c-1.663-2.494-2.412-2.494-3.206-2.494c-0.137,0-0.18,0.032-0.181,0.032 c-0.025,0.064,0.043,0.435,0.534,0.926c0.963,0.963,0.998,1.033,1.905,2.847c0.369,0.736,1.911,3.093,6.233,2.392 c0.147-0.021,0.292,0.019,0.404,0.113c0.111,0.096,0.176,0.234,0.176,0.381v3.523C44.5,68.372,44.533,68.651,44.602,68.965z"></path></g><g><path fill="#fefdef" d="M60.437,51.362c-0.9,1.994-2.876,3.652-6.354,3.93"></path><path fill="#472b29" d="M54.083,55.542c-0.129,0-0.238-0.1-0.249-0.23c-0.011-0.138,0.091-0.258,0.229-0.269 c3.805-0.305,5.442-2.227,6.146-3.784c0.058-0.127,0.205-0.183,0.331-0.125c0.125,0.057,0.182,0.204,0.125,0.33 c-1.073,2.377-3.403,3.824-6.562,4.077C54.097,55.542,54.09,55.542,54.083,55.542z"></path></g><g><path fill="#fefdef" d="M60.959,47.41c0.111,0.753,0.109,1.552-0.03,2.342"></path><path fill="#472b29" d="M60.93,50.002c-0.015,0-0.029-0.001-0.044-0.004c-0.136-0.023-0.227-0.153-0.203-0.289 c0.129-0.734,0.139-1.517,0.029-2.263c-0.021-0.136,0.074-0.264,0.21-0.283c0.137-0.02,0.264,0.073,0.284,0.211 c0.12,0.809,0.109,1.624-0.031,2.421C61.155,49.917,61.049,50.002,60.93,50.002z"></path></g><g><path fill="#fefdef" d="M59.083,43.875c0.633,0.451,1.146,1.179,1.488,2.055"></path><path fill="#472b29" d="M60.571,46.181c-0.1,0-0.194-0.061-0.233-0.159c-0.334-0.856-0.818-1.528-1.4-1.942 c-0.112-0.08-0.139-0.236-0.059-0.349c0.081-0.113,0.236-0.138,0.349-0.06c0.662,0.472,1.207,1.222,1.576,2.169 c0.05,0.129-0.014,0.273-0.142,0.324C60.632,46.175,60.602,46.181,60.571,46.181z"></path></g>
                            </svg>
                        </a>
                    </div>
                    <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1300">
                        <a href="https://www.linkedin.com/in/sadiq-mohammad-2b256b227/" title="Linkedin">
                            {/*<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 14.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 8 12 8s5 2.358 5 6.5z"></path>
                                <path d="M12 6a4.5 4.5 0 014.5 4.5v5.25h-3V10.5a1.5 1.5 0 10-3 0v5.25h-3V10.5A4.5 4.5 0 0112 6v0zM4.5 6.75h-3v9h3v-9zM3 4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>*/}
                            <svg xmlns="http://www.w3.org/2000/svg" x="18px" y="18px" width="35" height="35" viewBox="0 0 100 100">
                                <path fill="#ee3e54" d="M13 27A2 2 0 1 0 13 31A2 2 0 1 0 13 27Z"></path><path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"></path><path fill="#fce0a2" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"></path><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"></path><path fill="#ee3e54" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"></path><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"></path><path fill="#ee3e54" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"></path><path fill="#fff" d="M18.5 51A2.5 2.5 0 1 0 18.5 56A2.5 2.5 0 1 0 18.5 51Z"></path><path fill="#f1bc19" d="M21 66A1 1 0 1 0 21 68A1 1 0 1 0 21 66Z"></path><path fill="#fff" d="M80 33A1 1 0 1 0 80 35A1 1 0 1 0 80 33Z"></path><g><path fill="#127ad8" d="M35,72.3c-4,0-7.3-3.3-7.3-7.3V35c0-4,3.3-7.3,7.3-7.3h30c4,0,7.3,3.3,7.3,7.3v30c0,4-3.3,7.3-7.3,7.3H35z"></path><path fill="#472b29" d="M65,28.4c3.6,0,6.6,3,6.6,6.6v30c0,3.6-3,6.6-6.6,6.6H35c-3.6,0-6.6-3-6.6-6.6V35c0-3.6,3-6.6,6.6-6.6H65 M65,27H35c-4.4,0-8,3.6-8,8v30c0,4.4,3.6,8,8,8h30c4.4,0,8-3.6,8-8V35C73,30.6,69.4,27,65,27L65,27z"></path></g><g><path fill="#fdfcee" d="M63.6,68.5H36.5c-2.7,0-4.8-2.2-4.8-4.8V36.3c0-2.7,2.2-4.8,4.8-4.8h27.1c2.7,0,4.8,2.2,4.8,4.8v27.3 C68.4,66.3,66.3,68.5,63.6,68.5z"></path></g><g><path fill="#472b29" d="M68.5,47.4c-0.3,0-0.5-0.2-0.5-0.5V43c0-0.3,0.2-0.5,0.5-0.5S69,42.7,69,43v3.9C69,47.2,68.8,47.4,68.5,47.4z"></path></g><g><path fill="#472b29" d="M68.5,40.5c-0.3,0-0.5-0.2-0.5-0.5v-2c0-0.3,0.2-0.5,0.5-0.5S69,37.7,69,38v2C69,40.3,68.8,40.5,68.5,40.5z"></path></g><g><path fill="#472b29" d="M64,69H36c-2.8,0-5-2.2-5-5V36c0-2.8,2.2-5,5-5h25.4c0.3,0,0.5,0.2,0.5,0.5S61.7,32,61.4,32H36 c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h28c2.2,0,4-1.8,4-4V49.6c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5V64C69,66.8,66.8,69,64,69z"></path></g><g><path fill="#127ad8" d="M60.5,51.6v6.9h-4.1l-0.1-6.9c0-1.7-0.8-3-2.4-3c-1.2,0-1.9,0.8-2.2,1.6c-0.1,0.3-0.1,0.7-0.1,1v7.2h-4.2 c0,0,0.1-11.7,0-12.9h4.2v2c0,0,0,0,0,0h0v0c0.6-1,1.6-2.1,3.9-2.1C58.4,45.5,60.5,47.3,60.5,51.6z"></path><path fill="#472b29" d="M60.5,59h-4.1c-0.3,0-0.5-0.2-0.5-0.5l-0.1-6.9c0-0.7-0.2-2.5-1.9-2.5c-1.1,0-1.6,0.9-1.8,1.3 c0,0.1-0.1,0.4-0.1,0.9v7.2c0,0.3-0.2,0.5-0.5,0.5h-4.2c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.1,0.1-11.7,0-12.9 c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.2-0.2,0.4-0.2h4.2c0.3,0,0.5,0.2,0.5,0.5v0.6c0.9-0.8,2-1.2,3.4-1.2c1.6,0,2.8,0.5,3.8,1.4 c1.1,1.1,1.7,2.9,1.7,5.2v6.9C61,58.8,60.8,59,60.5,59z M56.9,58H60v-6.4c0-2-0.5-3.5-1.4-4.5c-0.7-0.7-1.8-1.1-3-1.1 c-2.1,0-3,1-3.5,1.8c-0.2,0.4-0.7,0.4-0.9,0.1c-0.1-0.1-0.1-0.3,0-0.4v-1.4h-3.2c0,2.2,0,9.9,0,11.9h3.2v-6.7 c0-0.5,0.1-0.9,0.2-1.2c0.5-1.2,1.5-1.9,2.7-1.9c1.8,0,2.9,1.3,2.9,3.5L56.9,58z"></path></g><g><path fill="#127ad8" d="M42.4,39.8c-1.2,0-2,0.8-2,2c0,1.1,0.8,2,2,2h0c1.3,0,2-0.9,2-2C44.4,40.6,43.6,39.8,42.4,39.8z"></path><path fill="#472b29" d="M42.4,44.2c-1.5,0-2.5-1-2.5-2.5s1.1-2.5,2.5-2.5c1.4,0,2.5,1,2.5,2.4C44.9,43.2,43.8,44.2,42.4,44.2z M42.4,40.3c-0.9,0-1.5,0.6-1.5,1.5c0,0.9,0.6,1.5,1.5,1.5c0.9,0,1.6-0.6,1.6-1.5C43.9,40.9,43.3,40.3,42.4,40.3z"></path></g><g><path fill="#127ad8" d="M40.4 45.6H44.6V58.5H40.4z"></path><path fill="#472b29" d="M44.6,59h-4.2c-0.3,0-0.5-0.2-0.5-0.5V45.6c0-0.3,0.2-0.5,0.5-0.5h4.2c0.3,0,0.5,0.2,0.5,0.5v12.9 C45.1,58.8,44.9,59,44.6,59z M40.9,58h3.2V46.1h-3.2V58z"></path></g>
                            </svg>
                        </a>
                        </div>
                    <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1600">
                        <a href="https://twitter.com/Md_Sadiq_Md" target="_blank" title="Twitter">
                            {/*<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 13.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 7 12 7s5 2.358 5 6.5z"></path>
                                <path d="M17.25 2.25a8.174 8.174 0 01-2.355 1.147A3.36 3.36 0 009 5.647v.75A7.995 7.995 0 012.25 3s-3 6.75 3.75 9.75a8.73 8.73 0 01-5.25 1.5c6.75 3.75 15 0 15-8.625 0-.209-.02-.417-.06-.622a5.79 5.79 0 001.56-2.753v0z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>*/}
                            <svg xmlns="http://www.w3.org/2000/svg" x="18px" y="18px" width="35" height="35" viewBox="0 0 48 48">
                                <path fill="#9fa8da" d="M40.121,44H15.879C13.737,44,12,42.263,12,40.121V15.879C12,13.737,13.737,12,15.879,12h24.242	C42.263,12,44,13.737,44,15.879v24.242C44,42.263,42.263,44,40.121,44z"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M40.5,31.5v5	c0,2.209-1.791,4-4,4h-25c-2.209,0-4-1.791-4-4V26"></path><path fill="none" stroke="#18193f" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M7.5,18.064V11.5	c0-2.209,1.791-4,4-4h25c2.209,0,4,1.791,4,4v11.33"></path><path fill="#18193f" d="M34.257,34H27.82L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#18193f" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#18193f" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                            </svg>
                        </a>
                    </div>
                    <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1900">
                        <a href="mailto:mohammadsadiq4950@gmail.com" target="_blank" title="Email">
                            {/*<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path className="fill" d="M17 13.5c0 4.142-2.502 4-6.645 4-4.142 0-8.355.142-8.355-4S7.858 7 12 7s5 2.358 5 6.5z"></path>
                                <path d="M3 3h12c.825 0 1.5.675 1.5 1.5v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9C1.5 3.675 2.175 3 3 3z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16.5 4.5L9 9.75 1.5 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>*/}
                            <svg xmlns="http://www.w3.org/2000/svg" x="18px" y="18px" width="35" height="35" viewBox="0 0 100 100">
                                <path fill="#f1bc19" d="M77,12c-0.552,0-1,0.448-1,1s0.448,1,1,1s1-0.448,1-1S77.552,12,77,12z"></path><path fill="#f3dea3" d="M50,13c-20.435,0-37,16.565-37,37s16.565,37,37,37s37-16.565,37-37S70.435,13,50,13z"></path><path fill="#f1bc19" d="M83,11c-2.209,0-4,1.791-4,4s1.791,4,4,4s4-1.791,4-4S85.209,11,83,11z"></path><path fill="#cd4054" d="M87,22c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S88.105,22,87,22z"></path><path fill="#fbcd59" d="M81,74c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S82.105,74,81,74z M15,59c-2.209,0-4,1.791-4,4	s1.791,4,4,4s4-1.791,4-4S17.209,59,15,59z"></path><path fill="#cd4054" d="M25,85c-1.105,0-2,0.895-2,2s0.895,2,2,2s2-0.895,2-2S26.105,85,25,85z"></path><path fill="#fff" d="M18.5,49c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5S19.881,49,18.5,49z M79.5,32c-0.828,0-1.5,0.672-1.5,1.5s0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5S80.328,32,79.5,32z"></path><path fill="#78a0cf" d="M36.224,48.245v20.633h-8.163C26.367,68.878,25,67.694,25,66V39.47L36.224,48.245z"></path><path fill="#c4211f" d="M36.224,34v14.245L25,39.47v-2.735c0-1.306,0.449-2.51,1.194-3.459	c1.848-2.401,5.477-2.883,7.878-0.959L36.224,34z"></path><polygon fill="#eb4235" points="63.775,34 63.775,48.235 50,59 36.224,48.245 36.224,34 50,44.755"></polygon><path fill="#f1bc19" d="M75,36.735v2.735l-11.224,8.765V34l2.153-1.684c1.031-0.806,2.245-1.194,3.459-1.194	C72.408,31.094,75.035,33.659,75,36.735z"></path><path fill="#9ca74c" d="M75,39.47v26.347c0,1.694-1.367,3.061-3.061,3.061h-8.163V48.235L75,39.47z"></path><line x1="28.061" x2="28.061" y1="63.776" y2="65.816" fill="none" stroke="#472b29" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".75"></line><line x1="28.061" x2="28.061" y1="57.653" y2="60.714" fill="none" stroke="#472b29" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".75"></line><line x1="28.061" x2="28.061" y1="47.449" y2="54.534" fill="none" stroke="#472b29" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".75"></line><path fill="none" stroke="#472b29" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.4" d="M36.224,34.236v34.641	h-8.163c-1.691,0-3.061-1.371-3.061-3.061V36.735c0-3.1,2.513-5.612,5.612-5.612"></path><path fill="none" stroke="#472b29" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.4" d="M73.81,33.28	c-1.908-2.442-5.435-2.876-7.878-0.967L50,44.76l0,0L34.067,32.312c-2.442-1.908-5.969-1.475-7.878,0.967"></path><line x1="51.412" x2="56.052" y1="54.002" y2="50.331" fill="none" stroke="#472b29" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".75"></line><line x1="45.648" x2="49.26" y1="51.676" y2="54.534" fill="none" stroke="#472b29" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".75"></line><line x1="41.651" x2="44.047" y1="48.513" y2="50.409" fill="none" stroke="#472b29" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".75"></line><line x1="39.017" x2="40.05" y1="46.429" y2="47.247" fill="none" stroke="#472b29" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".75"></line><polyline fill="none" stroke="#472b29" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.4" points="25.163,39.6 50,59.004 50,59.004 74.819,39.614"></polyline><path fill="none" stroke="#472b29" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.4" d="M69.387,31.123	c3.1,0,5.612,2.513,5.612,5.612v29.081c0,1.691-1.371,3.061-3.061,3.061h-8.163v-34.71"></path>
                            </svg>
                        </a>
                    </div>
                    <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1600">
                        <a href="https://mdsadiqmd.hashnode.dev/" target="_blank" title="Hashnode">
                        <svg xmlns="http://www.w3.org/2000/svg" x="18px" y="18px" width="35" height="35" viewBox="0 0 48 48">
                            <path fill="#2962ff" d="M42.164,17.126L30.874,5.835c-3.781-3.781-9.967-3.781-13.748,0L5.836,17.126	c-3.781,3.781-3.781,9.967,0,13.748l11.291,11.291c3.781,3.781,9.967,3.781,13.748,0l11.291-11.291	C45.945,27.093,45.945,20.907,42.164,17.126z M24,31c-3.866,0-7-3.134-7-7c0-3.866,3.134-7,7-7s7,3.134,7,7	C31,27.866,27.866,31,24,31z"></path>
                        </svg>
                        </a>
                    </div>
                    {/* <div>
                        <svg className="socialicon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                    </div>
                    <div>
                        <svg className="socialicon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                        </svg>
                    </div> */}
                    <hr />
                </div>
            </div>  
            
        </div>
    )
}

export default About