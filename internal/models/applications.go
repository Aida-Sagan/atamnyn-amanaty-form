package models

import "time"

type Application struct {
	ID                  uint      `json:"id" gorm:"primaryKey"`
	RequestNumber       int       `json:"request_number"`
	Status              string    `json:"status"`
	TargetFullName      string    `json:"target_full_name"`
	DateOfBirth         time.Time `json:"date_of_birth"`
	PlaceOfBirth        string    `json:"place_of_birth"`
	ConscriptionPlace   string    `json:"conscription_place"`
	DateOfConsription   time.Time `json:"date_of_consription"`
	MaritalStatus       string    `json:"marital_status"`
	NumberOfChildren    int       `json:"number_of_children"`
	ParentName          string    `json:"parent_name"`
	OtherRelativesNames string    `json:"other_relatives_names"`
	SearcherFullName    string    `json:"searcher_full_name"`
	ContactPhone        string    `json:"contact_phone"`
	Address             string    `json:"address"`
	Email               string    `json:"email"`
	OtherContactMethods string    `json:"other_contact_methods"`
	GoogleDriveLink     string    `json:"google_drive_link"`
	BurialPlace         string    `json:"burial_place"`
	Feedback            string    `json:"feedback"`
	Files               []File    `gorm:"foreignKey:ApplicationID"`
}

// CREATE TABLE IF NOT EXISTS `applications` (
//     `request_number` INT AUTO_INCREMENT PRIMARY KEY,
//     `status` ENUM('0', '1', '2') DEFAULT '0',
//     `target_full_name` VARCHAR(255),
//     `date_of_birth` DATE,
//     `place_of_birth` VARCHAR(255),
//     `conscription_place` TEXT,
//     `date_of_consription` DATE,
//     `marital_status` ENUM('Холост', 'Женат') DEFAULT 'Холост',
//     `number_of_children` INT,
//     `parent_name` VARCHAR(255) NOT NULL,
//     `other_relatives_names` TEXT,
//     `searcher_full_name` VARCHAR(255),
//     `contact_phone` VARCHAR(20),
//     `address` VARCHAR(255),
//     `email` VARCHAR(255),
//     `other_contact_methods` TEXT,
//     `google_drive_link` VARCHAR(255),
//     `burial_place` TEXT,
//     `feedback` TEXT
// );
