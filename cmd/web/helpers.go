package main

import (
	"context"

	"google.golang.org/api/drive/v3"
)

func uploadFileToDrive(ctx context.Context, fileName string) (string, error) {
	srv, err := drive.NewService(ctx)
	if err != nil {
		return "ERROR UPLOADING FILE", err
	}
	fileMetadata := &drive.File{Name: fileName}
	file, err := srv.Files.Create(fileMetadata).Media(nil).Context(ctx).Do()
	if err != nil {
		return "", err
	}
	return file.WebViewLink, nil
}
