-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 13, 2015 at 12:52 AM
-- Server version: 5.5.43-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `qbit`
--

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE IF NOT EXISTS `questions` (
  `qid` int(11) NOT NULL,
  `question` longtext NOT NULL,
  `ans1` longtext NOT NULL,
  `ans2` longtext NOT NULL,
  `ans3` longtext NOT NULL,
  `ans4` longtext NOT NULL,
  `level` int(11) NOT NULL,
  `correct` int(11) NOT NULL,
  PRIMARY KEY (`qid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`qid`, `question`, `ans1`, `ans2`, `ans3`, `ans4`, `level`, `correct`) VALUES
(1, 'Which country''s embassy has granted Julian Assange asylum currently?', 'Sweden', 'Ghana', 'Ecuador', 'India', 1, 3),
(2, 'Which tech company''s logo is named after famous NBA player Larry Bird? (It''s all there)', 'Dropbox', 'Facebook', 'Twitter', 'Whatsapp', 1, 3),
(3, 'Which of these games was NOT inspired by pacman?', 'GTA Series', 'Wolfenstein 3D', 'Doom', 'Dave', 1, 4),
(4, 'What Popular Nintendo Game Was Originally Titled ?Dream Factory: Heart-Pounding Panic??', 'Cooking Mama', 'The Legend of Spyro; Eternal Night', 'Kirby''s Dreamland', 'Super Mario Bros. 2', 1, 4),
(5, 'This game borrows heavily from scenes from cult classics like Scarface, Blow, Miami Vice, etc. Which game?', 'GTA San Andreas', 'Red Dead Redemption', 'Miami Vice, The Game', 'GTA Vice City', 1, 4),
(6, 'What is the name for the "contest" to find a Google query of only two words that returns only one hit?', 'Googlewhack', 'Googlehack', 'Googledorks', 'Googlederp', 2, 1),
(7, 'What in the world of technology began its meteoric rise with a piece of media called "Me at the zoo"?', 'SoundCloud', 'MySpace', 'YouTube', 'BitTorrent', 2, 3),
(8, 'Introduced in 1992, IBM Simon was the first of its kind. What?', 'Laptop', 'PDA', 'Gaming Console', 'Smartphone', 2, 4),
(9, 'Project Natal is today more popularly known (in the gaming as well as the computing community) as', 'Kinect', 'Wii', 'Playstation 4', 'iPhone 6', 2, 1),
(10, 'Codenamed "Majel" after the wife of Gene Roddenberry, the voice of the computer systems on the Star Trek franchise, what do we know it as today?', 'Cortana', 'Siri', 'S-Voice', 'Google Now', 2, 4),
(11, 'William Shockley, Walter Brattain, John Bardeen. Revolutionized the tech world as we know it. What did they invent?', 'Transistor', 'Capacitor', 'Microchip', 'Resistor', 3, 1),
(12, 'This company is named after a stream that ran behind the houses of John Warnock and Charles Geschke. They founded said company. Which company?', 'Ubuntu', 'Adobe', 'Riversoft Computing', 'None of the above', 3, 2),
(13, 'Which of the following shows did the supercomputer IBM Watson appear on, catapulting its AI to mainstream fame?', 'Jeopardy', 'Who Wants To Be A Millionaire?', 'Wheel of Fortune', 'Weakest Link', 3, 1),
(14, 'PDA users might remember Newton, the OS. Which company was behind this application?', 'IBM', 'Googlehack', 'Apple', 'Hewlett Packard', 3, 3),
(15, 'Which language inspired Sabeer Bhatia to name this revolutionary tech product (second in userbase only to Google)?', 'HTML', 'Java', 'C++', 'Python', 3, 1),
(16, 'Oak. Green. X (the language today). These are all "names" for a particular, popular programming language. Which?', 'Python', 'C++', 'COBOL', 'Java', 4, 4),
(17, 'Robert Noyce, the founder of Intel, was originally related to which company?', 'Fairchild Semiconductors', 'Freescale Semiconductors', 'General Electric', 'Advanced Micro Devices', 4, 1),
(18, 'Mega is actually an exponent of 1000. However, in the digital world, 1024 is the base. To prevent this rounding off, what new standard has been adopted to denote this?', 'Mebebyte', 'Mebubyte', 'Mibibyte', 'Mebibyte', 4, 4),
(19, 'This company, started in 1939, began in Su-Dong. It dealt in groceries and produced its own noodles. What tech giant is this?', 'Furukawa Electrics', 'Samsung', 'Honda', 'Sony', 4, 2),
(20, 'In 2007, which company was deemed the largest MP3 player manufacturer?', 'Samsung', 'Apple', 'Nokia', 'iRiver', 4, 3),
(21, 'Which company (not tech exactly) is the largest tire manufacturer in the world?', 'Bridgestone', 'Lego', 'Michelin', 'Goodyear', 5, 2),
(22, 'Which Tech Company Once Consumed 100% Of The World?s CD Production Capabilities?', 'Microsoft', 'America Online', 'Apple', 'Sony', 5, 2),
(23, 'Which of these cpmpanies invented Pacman?', 'Nintendo', 'Atari', 'Namco', 'Sega', 5, 3),
(24, 'Which Country Was The First To Ban Video Games?', 'Russia', 'France', 'Greece', 'China', 5, 3),
(25, 'What Product Was The First To Be Advertised Into Deep Space?', 'Mountain Dew', 'Xboxes', 'Doritos', 'IBM Computers', 5, 3);

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE IF NOT EXISTS `results` (
  `qid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `time` int(11) NOT NULL,
  `ans` int(11) NOT NULL,
  PRIMARY KEY (`qid`,`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`qid`, `uid`, `score`, `time`, `ans`) VALUES
(1, 1, 24, 1, 3),
(1, 2, 0, 1, 1),
(2, 1, 46, 3, 3),
(2, 2, 24, 1, 3),
(3, 1, 68, 3, 4),
(3, 2, 24, 1, 2),
(4, 1, 91, 2, 4),
(4, 2, 24, 2, 3),
(5, 1, 114, 2, 4),
(5, 2, 24, 1, 2),
(6, 1, 137, 2, 1),
(6, 2, 47, 2, 1),
(7, 1, 137, 1, 2),
(7, 2, 70, 2, 3),
(8, 1, 159, 3, 4),
(8, 2, 70, 1, 3),
(9, 1, 183, 1, 1),
(9, 2, 93, 2, 1),
(10, 1, 206, 2, 4),
(10, 2, 117, 1, 4),
(11, 1, 229, 2, 1),
(11, 2, 140, 2, 1),
(12, 1, 231, 23, 2),
(12, 2, 164, 1, 2),
(13, 1, 254, 2, 1),
(13, 2, 187, 2, 1),
(14, 1, 276, 3, 3),
(14, 2, 210, 2, 3),
(15, 1, 298, 3, 1),
(15, 2, 234, 1, 1),
(16, 1, 322, 1, 4),
(16, 2, 258, 1, 4),
(17, 1, 344, 3, 1),
(17, 2, 281, 2, 1),
(18, 1, 366, 3, 4),
(18, 2, 305, 1, 4),
(19, 1, 389, 2, 2),
(19, 2, 328, 2, 2),
(20, 1, 412, 2, 3),
(20, 2, 352, 1, 3),
(21, 1, 436, 1, 2),
(21, 2, 375, 2, 2),
(22, 1, 458, 3, 2),
(22, 2, 399, 1, 2),
(23, 1, 481, 2, 3),
(23, 2, 423, 1, 3),
(24, 1, 505, 1, 3),
(24, 2, 446, 2, 3),
(25, 1, 528, 2, 3),
(25, 2, 470, 1, 3);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
