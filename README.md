class book:
    def __init__(self,name,author,pages,publisher,price):
        self.name=name
        self.author=author
        self.pages=pages
        self.publisher=publisher
        self.price=price
    def view_details(self):
        print(f'name :{self.name}\n author :{self.author}\n pages :{self.pages}\n publisher :{self.publisher} \n price :{self.price}')
        
book1 = book('Padmavat','Jayasi','37','RajKamal Publication','400')
book1.view_details()
