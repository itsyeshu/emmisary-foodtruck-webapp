import csv

def setSeedData(seedFilePath, Model, parseRow, failSilently=False):
  """
  @param {String} seedFilePath - absolute path of '.csv' file with data
  @param {django.db.models.Model} Model - 
  @param {Function} parseRow - return `data` dict with populated fields and exception if data is invalid

  @return {Interger} count - Count of 
  """
  with open(seedFilePath) as table:
    reader = csv.reader(table)
    dataList = []
    totalRows = 0
    addedRows = 0
    # Validate the data
    for index, row in enumerate(reader):
      # Ignore head row
      if index == 0:
        continue
      try:
        data = parseRow(row)
        dataList.append(Model(**data))
        addedRows += 1
      except Exception as e:
        # print(e)
        if not failSilently:
          raise Exception(e)
        # else : print("Failed silently")
      totalRows += 1
  # Seed the data
  Model.objects.bulk_create(dataList)
  return addedRows, totalRows