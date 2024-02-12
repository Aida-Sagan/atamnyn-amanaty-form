package main

import (
	"aa-backend/internal/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (app *App) createApplicationHandler(c *gin.Context) {
	var appRequest models.Application
	if err := c.ShouldBindJSON(&appRequest); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Создаем запись в базе данных
	result := app.DB.Create(&appRequest)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Заявка успешно создана", "data": appRequest})
}
