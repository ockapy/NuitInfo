-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 03 déc. 2021 à 05:42
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `base_sauvetage`
--
CREATE DATABASE IF NOT EXISTS `base_sauvetage` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `base_sauvetage`;

-- --------------------------------------------------------

--
-- Structure de la table `bateau`
--

DROP TABLE IF EXISTS `bateau`;
CREATE TABLE IF NOT EXISTS `bateau` (
  `Matricule` int(11) NOT NULL AUTO_INCREMENT,
  `nomBateau` varchar(50) NOT NULL,
  PRIMARY KEY (`Matricule`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `bateau`
--

INSERT INTO `bateau` (`Matricule`, `nomBateau`) VALUES
(1, 'VogueDeMort'),
(2, 'RobertoMerry'),
(5, 'Titanic'),
(6, 'BlackPearl');

-- --------------------------------------------------------

--
-- Structure de la table `equipe`
--

DROP TABLE IF EXISTS `equipe`;
CREATE TABLE IF NOT EXISTS `equipe` (
  `Id_Pers` int(11) NOT NULL,
  `Id_Sauvetage` int(11) NOT NULL,
  PRIMARY KEY (`Id_Pers`,`Id_Sauvetage`),
  KEY `Id_Pers` (`Id_Pers`,`Id_Sauvetage`),
  KEY `IdSauv` (`Id_Sauvetage`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `equipe`
--

INSERT INTO `equipe` (`Id_Pers`, `Id_Sauvetage`) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2);

-- --------------------------------------------------------

--
-- Structure de la table `personne`
--

DROP TABLE IF EXISTS `personne`;
CREATE TABLE IF NOT EXISTS `personne` (
  `idPers` int(11) NOT NULL AUTO_INCREMENT,
  `nomPers` varchar(40) DEFAULT NULL,
  `prenomPers` varchar(25) DEFAULT NULL,
  `autorisation` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`idPers`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `personne`
--

INSERT INTO `personne` (`idPers`, `nomPers`, `prenomPers`, `autorisation`) VALUES
(1, 'Robert', 'Jeremy', 1),
(2, 'Rodriguez', 'Maxime', 1),
(3, 'Chauveau', 'Anas', 1),
(4, 'Ribbero', 'Marco', 1);

-- --------------------------------------------------------

--
-- Structure de la table `sauvetage`
--

DROP TABLE IF EXISTS `sauvetage`;
CREATE TABLE IF NOT EXISTS `sauvetage` (
  `idSauvetage` int(11) NOT NULL AUTO_INCREMENT,
  `nb_Victime` int(11) NOT NULL,
  `Matricule` int(11) NOT NULL,
  `Article` text NOT NULL,
  `titre` varchar(20) NOT NULL,
  PRIMARY KEY (`idSauvetage`),
  KEY `Id_Victime` (`nb_Victime`,`Matricule`),
  KEY `Matric` (`Matricule`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `sauvetage`
--

INSERT INTO `sauvetage` (`idSauvetage`, `nb_Victime`, `Matricule`, `Article`, `titre`) VALUES
(1, 30, 1, 'article pour le matricule 1', 'Titre du sauvetage 1'),
(2, 20, 2, 'article pour le matricule 2', 'On va vous dichiri');
--
-- Base de données : `communauté`
--
CREATE DATABASE IF NOT EXISTS `communauté` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `communauté`;

-- --------------------------------------------------------

--
-- Structure de la table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
CREATE TABLE IF NOT EXISTS `ticket` (
  `idTicket` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Sauvetage` int(11) NOT NULL,
  `modif` int(11) NOT NULL,
  PRIMARY KEY (`idTicket`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;
--
-- Base de données : `compte`
--
CREATE DATABASE IF NOT EXISTS `compte` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `compte`;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `Identifiant` varchar(50) NOT NULL,
  `mdp` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(25) NOT NULL,
  `adresseMail` varchar(50) NOT NULL,
  `admin` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`idUser`, `Identifiant`, `mdp`, `nom`, `prenom`, `adresseMail`, `admin`) VALUES
(3, 'marco', '123', 'afqsd', 'qsdf', 'test@gmail.com', 0),
(4, 'anas', '321', 'dgfqs', 'sdfqsdf', 'fsdqf@dfqsdf.bif', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
