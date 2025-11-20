import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const robuxPackages = [
  { id: 1, amount: 400, price: 199, bonus: 0, popular: false },
  { id: 2, amount: 800, price: 399, bonus: 80, popular: false },
  { id: 3, amount: 1700, price: 799, bonus: 200, popular: false },
  { id: 4, amount: 4500, price: 1999, bonus: 500, popular: false },
  { id: 5, amount: 10000, price: 3999, bonus: 1500, popular: true },
  { id: 6, amount: 15000, price: 5999, bonus: 2500, popular: false },
];

const paymentMethods = [
  { name: "Банковская карта", icon: "CreditCard", description: "Visa, Mastercard, МИР" },
  { name: "СБП", icon: "Smartphone", description: "Быстрая оплата" },
  { name: "Электронные кошельки", icon: "Wallet", description: "ЮMoney, QIWI" },
  { name: "Криптовалюта", icon: "Bitcoin", description: "BTC, ETH, USDT" },
];

const reviews = [
  { id: 1, name: "Максим", rating: 5, text: "Робаксы пришли моментально! Супер сервис!", date: "2 дня назад" },
  { id: 2, name: "Анна", rating: 5, text: "Покупала для сына, все работает отлично. Рекомендую!", date: "5 дней назад" },
  { id: 3, name: "Дмитрий", rating: 5, text: "Лучшие цены и быстрая доставка. Буду покупать еще!", date: "1 неделю назад" },
  { id: 4, name: "София", rating: 4, text: "Все хорошо, робаксы получила за 2 минуты", date: "2 недели назад" },
];

export default function Index() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);

  const handlePurchase = (packageId: number) => {
    setSelectedPackage(packageId);
    alert('Функция оплаты будет добавлена на следующем этапе! 🎮');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">RobaксShop</h1>
              <p className="text-sm text-muted-foreground">Магазин робаксов</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#packages" className="text-foreground hover:text-primary transition-colors">Пакеты</a>
            <a href="#payment" className="text-foreground hover:text-primary transition-colors">Оплата</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 text-center">
        <div className="animate-fade-in">
          <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold">
            ⚡ Мгновенная доставка
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Купить Робаксы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Автоматическая выдача робаксов после оплаты. Безопасно, быстро, надежно!
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Купить сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Info" size={20} className="mr-2" />
              Как это работает
            </Button>
          </div>
        </div>
      </section>

      <section id="packages" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Выберите пакет робаксов</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {robuxPackages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`hover-scale cursor-pointer transition-all ${
                pkg.popular ? 'border-primary border-2 shadow-lg shadow-primary/20' : ''
              } ${selectedPackage === pkg.id ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              <CardHeader>
                {pkg.popular && (
                  <Badge className="mb-2 bg-accent w-fit">Популярный</Badge>
                )}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Coins" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-center">
                  {pkg.amount.toLocaleString()}
                  {pkg.bonus > 0 && (
                    <span className="text-accent text-lg ml-1">+{pkg.bonus}</span>
                  )}
                </CardTitle>
                <CardDescription className="text-center">робаксов</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {pkg.price}₽
                </div>
                {pkg.bonus > 0 && (
                  <Badge variant="secondary" className="bg-accent/20 text-accent">
                    <Icon name="Gift" size={14} className="mr-1" />
                    Бонус {pkg.bonus}
                  </Badge>
                )}
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePurchase(pkg.id);
                  }}
                >
                  <Icon name="ShoppingBag" size={18} className="mr-2" />
                  Купить
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="payment" className="container mx-auto px-4 py-16 bg-card/50 rounded-3xl my-16">
        <h3 className="text-3xl font-bold text-center mb-4">Способы оплаты</h3>
        <p className="text-center text-muted-foreground mb-12">Выберите удобный для вас метод оплаты</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentMethods.map((method, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={method.icon as any} size={28} className="text-primary" />
                </div>
                <CardTitle className="text-center text-lg">{method.name}</CardTitle>
                <CardDescription className="text-center">{method.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Icon name="Shield" size={20} className="text-primary" />
            <span>Защищенные платежи SSL шифрованием</span>
          </div>
        </div>
      </section>

      <section id="reviews" className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-4">Отзывы клиентов</h3>
        <p className="text-center text-muted-foreground mb-12">Что говорят наши покупатели</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="hover-scale">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <CardDescription>{review.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <Card className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border-2 border-primary/30">
          <CardHeader>
            <CardTitle className="text-3xl">Готовы купить робаксы?</CardTitle>
            <CardDescription className="text-lg">Получите робаксы на свой аккаунт за 2 минуты!</CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-12">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать покупку
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="container mx-auto px-4 py-8 border-t border-border mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={20} className="text-primary" />
            <span className="text-sm text-muted-foreground">© 2024 RobaксShop. Все права защищены.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Поддержка</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}