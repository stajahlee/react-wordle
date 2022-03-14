with open("words.txt", "r+") as f:
    lines = f.readlines()
    f.seek(0)
    for line in lines:
      # print ('line is', line)
      if len(line) == 6:
        f.write(f"'{line}',")
    f.truncate()