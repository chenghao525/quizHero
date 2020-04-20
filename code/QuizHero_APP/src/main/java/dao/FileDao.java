package dao;

import model.File;

import java.io.InputStream;

public interface FileDao {
    public InputStream getFile(int id);
    public void storeFile(File file);
    public void changeQuizPermission(int fileId, boolean permission);
    public Boolean checkQuizPermission(int fileId);
}