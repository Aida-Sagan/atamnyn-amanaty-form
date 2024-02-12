package models

import "gorm.io/gorm"

type File struct {
	gorm.Model
	ApplicationID uint
	FileName      string
	FileURL       string
}
