import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { FaCalendarAlt, FaChartBar, FaTasks, FaProjectDiagram } from "react-icons/fa";
import { FiActivity, FiChevronDown, FiChevronRight, FiPlus } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

import { AppLogo, TaskLogo1, TaskLogo2, TaskLogo3, TaskLogo4, AddIcon, ProjectIcon1, ProjectIcon2, ProjectIcon3 } from "../../assets";


const MenuLink = [
    {
        linkName: "Calendar",
        link: '/',
        inActiveLinkIcon: <FaCalendarAlt className={styles.inactiveIcon} />,
        activeLinkIcon: <FaCalendarAlt className={styles.activeIcon} />,
    },
    {
        linkName: "Analytics",
        link: '/Analytics',
        inActiveLinkIcon: <FaChartBar className={styles.inactiveIcon} />,
        activeLinkIcon: <FaChartBar className={styles.activeIcon} />,
    },
    {
        linkName: "Activity",
        link: '/Activity',
        inActiveLinkIcon: <FiActivity className={styles.inactiveIcon} />,
        activeLinkIcon: <FiActivity className={styles.activeIcon} />,
    },
    {
        linkName: "Projects",
        link: '/Projects',
        inActiveLinkIcon: <FaProjectDiagram className={styles.inactiveIcon} />,
        activeLinkIcon: <FaProjectDiagram className={styles.activeIcon} />,
    },
];

const ProjectsLink = [
    { linkName: "Flower Shop", ProjectImage: ProjectIcon1, ProjectNumber: 11 },
    { linkName: "Cloth", ProjectImage: ProjectIcon2, ProjectNumber: 23 },
    { linkName: "Gamer Boy", ProjectImage: ProjectIcon3, ProjectNumber: 541 },


];

const TasksLink = [
    { linkName: "Manage Finances" },
    { linkName: "Integrate ChatGPT" },
    { linkName: "Advertise Website" },
    { linkName: "Invest in DOGE" },
];

// Array of logos
const TaskLogos = [TaskLogo1, TaskLogo2, TaskLogo3, TaskLogo4];

// Dynamically add logos to tasks
const TasksWithLogos = TasksLink.map((task, index) => ({
    ...task,
    LinkIcon: <img src={TaskLogos[index]} alt={task.linkName} style={{ width: "20px", height: "20px" }} />,
}));



const Sidebar = () => {

    const [menuOpen, setMenuOpen] = useState(true)
    const location = useLocation()


    const toggleMenuLink = () => {
        setMenuOpen((prev) => !prev)
    }
    return (
        <aside className={styles.sidebar}>
            {/* Logo Section */}
            <div className={styles.logoContainer}>
                <img src={AppLogo} alt="TaskFlow" className={styles.logo} />
            </div>
            <div>



                <div className={styles.navContainer}>
                    <div className={styles.sectionHeader} onClick={toggleMenuLink}>
                        <p className={styles.sectionTitle}>Overview</p>
                        {menuOpen ? (
                            <FiChevronDown className={styles.toggleIcon} />
                        ) : (
                            <FiChevronRight className={styles.toggleIcon} />
                        )}
                    </div>

                    <ul
                        className={`${styles.navList} ${menuOpen ? styles.open : ""}`}
                        aria-expanded={menuOpen}
                    >
                        {MenuLink.map((menu, index) => {
                            const isActive = location?.pathname === menu?.link;

                            return (
                                <li
                                    key={index}
                                    className={`${styles.navItem} ${isActive ? styles.activeNav : ""}`}
                                >
                                    <Link to={`${menu?.link}`} className={styles.navLink}>
                                        <span className={styles.icon}>
                                            {isActive ? menu.activeLinkIcon : menu.inActiveLinkIcon}
                                        </span>
                                        <span className={styles.navlinkText}>{menu.linkName}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <section className={styles.projectsSection}>
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionTitle}>Projects</p>
                        <img src={AddIcon} alt="Add Projects" className={styles.AddTask} />
                    </div>
                    <ul className={styles.projectList}>
                        {ProjectsLink?.slice(0, 3).map((project, index) => (
                            <li key={index} className={styles.projectItem}>
                                <Link className={styles.projectLink}>
                                    <div className={styles.projectContent}>
                                        <img className={styles.projectImage} src={project?.ProjectImage} alt={project.linkName} />
                                        <span className={styles.projectName}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus asperiores perferendis id dolores non quibusdam quam enim molestiae ad natus voluptatum odio qui, soluta, corporis nisi commodi sit magnam excepturi! Nam reiciendis magnam minus sint ipsa. Tempore placeat dolorum ad, voluptatum nam illum officia expedita quae, excepturi perferendis ipsam temporibus. Quidem cupiditate animi voluptatem dignissimos quos corporis laboriosam tempore ea a fugit enim facilis necessitatibus eius itaque impedit, recusandae quae? Sequi hic facilis voluptatum impedit, temporibus ab exercitationem cupiditate. Praesentium inventore deleniti, repellendus dicta atque laboriosam quod dolorum labore fugiat, aliquid quas cupiditate modi id reprehenderit odio. Error, cupiditate. Id.</span>
                                    </div>
                                    <div className={styles.projectNumber}>
                                        <span>{project.ProjectNumber}</span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {ProjectsLink?.length > 3 && (
                        <div className={styles.seeMoreContainer}>
                            <button className={styles.seeMoreButton}>
                                <p className={styles.seeMoreText}>See More</p>
                                <FiChevronDown className={styles.seeMoreIcon} />
                            </button>
                        </div>

                    )}

                </section>

                {/* <section className={styles.tasksSection}>
    <div className={styles.sectionHeader}>
        <p className={styles.sectionTitle}>Tasks</p>
        <img src={AddIcon} alt="Add Task" className={styles.AddTask} />
    </div>
    <ul className={styles.taskList}>
        {TasksWithLogos.map((task, index) => (
            <li key={index} className={styles.taskItem}>
                <div className={styles.taskDetails}>
                    <span className={styles.icon}>{task.LinkIcon}</span>
                    <p className={styles.taskName}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga ratione asperiores libero? Et tempora praesentium asperiores fugiat, corporis consectetur commodi ipsam neque nihil aperiam perferendis nam architecto similique ratione alias facere numquam voluptatibus consequatur, earum ipsum, at quo explicabo ea. Alias unde placeat nulla mollitia ab beatae nemo quod iusto dolores aut porro numquam deserunt iure quibusdam nam dicta cum reprehenderit voluptates, dolorum omnis aliquid natus cupiditate voluptas expedita. Laborum illum id enim asperiores in quibusdam debitis eveniet ipsum quia veritatis aliquam eius dolorum repudiandae dicta, iure mollitia minima quas et, accusantium quae esse perferendis eligendi porro neque? Cumque.</p>
                </div>
                <div className={styles.taskNotification}>
                    <p>12</p>
                </div>
            </li>
        ))}
    </ul>
</section> */}


                <section className={styles.projectsSection}>
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionTitle}>Task</p>
                        <img src={AddIcon} alt="Add Projects" className={styles.AddTask} />
                    </div>
                    <ul className={styles.projectList}>
                        {TasksWithLogos?.slice(0, 4).map((project, index) => (
                            <li key={index} className={styles.projectItem}>
                                <Link className={styles.projectLink}>
                                    <div className={styles.projectContent}>
                                    {project?.LinkIcon}
                                        <span className={styles.projectName}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus asperiores perferendis id dolores non quibusdam quam enim molestiae ad natus voluptatum odio qui, soluta, corporis nisi commodi sit magnam excepturi! Nam reiciendis magnam minus sint ipsa. Tempore placeat dolorum ad, voluptatum nam illum officia expedita quae, excepturi perferendis ipsam temporibus. Quidem cupiditate animi voluptatem dignissimos quos corporis laboriosam tempore ea a fugit enim facilis necessitatibus eius itaque impedit, recusandae quae? Sequi hic facilis voluptatum impedit, temporibus ab exercitationem cupiditate. Praesentium inventore deleniti, repellendus dicta atque laboriosam quod dolorum labore fugiat, aliquid quas cupiditate modi id reprehenderit odio. Error, cupiditate. Id.</span>
                                    </div>
                                    <div className={styles.projectNumber}>
                                        <span>12</span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {TasksWithLogos?.length > 4 && (
                        <div className={styles.seeMoreContainer}>
                            <button className={styles.seeMoreButton}>
                                <p className={styles.seeMoreText}>See More</p>
                                <FiChevronDown className={styles.seeMoreIcon} />
                            </button>
                        </div>

                    )}

                </section>

            </div>

            {/*

           
         <section className={styles.projectsSection}>
    <div className={styles.sectionHeader}>
        <p className={styles.sectionTitle}>Projects</p>
        <img src={AddIcon} alt="Add Projects" className={styles.AddTask} />
    </div>
    <ul className={styles.projectList}>
        {ProjectsLink.map((project, index) => (
            <li key={index} className={styles.projectItem}>
                <Link className={styles.projectLink}>
                    <div className={styles.projectContent}>
                        <img className={styles.projectImage} src={project?.ProjectImage} alt={project.linkName} />
                        <span className={styles.projectName}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus asperiores perferendis id dolores non quibusdam quam enim molestiae ad natus voluptatum odio qui, soluta, corporis nisi commodi sit magnam excepturi! Nam reiciendis magnam minus sint ipsa. Tempore placeat dolorum ad, voluptatum nam illum officia expedita quae, excepturi perferendis ipsam temporibus. Quidem cupiditate animi voluptatem dignissimos quos corporis laboriosam tempore ea a fugit enim facilis necessitatibus eius itaque impedit, recusandae quae? Sequi hic facilis voluptatum impedit, temporibus ab exercitationem cupiditate. Praesentium inventore deleniti, repellendus dicta atque laboriosam quod dolorum labore fugiat, aliquid quas cupiditate modi id reprehenderit odio. Error, cupiditate. Id.</span>
                    </div>
                    <div className={styles.projectNumber}>
                        <span>{project.ProjectNumber}</span>
                    </div>
                </Link>
            </li>
        ))}
    </ul>
</section>

            <section className={styles.tasksSection}>
    <div className={styles.sectionHeader}>
        <p className={styles.sectionTitle}>Tasks</p>
        <img src={AddIcon} alt="Add Task" className={styles.AddTask} />
    </div>
    <ul className={styles.taskList}>
        {TasksWithLogos.map((task, index) => (
            <li key={index} className={styles.taskItem}>
                <div className={styles.taskDetails}>
                    <span className={styles.icon}>{task.LinkIcon}</span>
                    <p className={styles.taskName}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga ratione asperiores libero? Et tempora praesentium asperiores fugiat, corporis consectetur commodi ipsam neque nihil aperiam perferendis nam architecto similique ratione alias facere numquam voluptatibus consequatur, earum ipsum, at quo explicabo ea. Alias unde placeat nulla mollitia ab beatae nemo quod iusto dolores aut porro numquam deserunt iure quibusdam nam dicta cum reprehenderit voluptates, dolorum omnis aliquid natus cupiditate voluptas expedita. Laborum illum id enim asperiores in quibusdam debitis eveniet ipsum quia veritatis aliquam eius dolorum repudiandae dicta, iure mollitia minima quas et, accusantium quae esse perferendis eligendi porro neque? Cumque.</p>
                </div>
                <div className={styles.taskNotification}>
                    <p>12</p>
                </div>
            </li>
        ))}
    </ul>
</section> */}

        </aside>
    );
};

export default Sidebar;
