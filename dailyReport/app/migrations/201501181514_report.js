migration.up = function(migrator) {
    migrator.db.execute('ALTER TABLE report ADD COLUMN filePath TEXT;');
};