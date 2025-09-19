import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [loanAmount, setLoanAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLoanApplication = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка на займ:', { loanAmount, phoneNumber });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Шапка */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="CreditCard" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">МикроЗайм</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
            <a href="#requirements" className="text-gray-700 hover:text-primary transition-colors">Требования</a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
            <a href="#security" className="text-gray-700 hover:text-primary transition-colors">Безопасность</a>
          </nav>
        </div>
      </header>

      {/* Главный блок */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Займ до
                <span className="text-primary block">500 000 ₽</span>
                за 15 минут
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Быстрое одобрение без справок и поручителей. Деньги на карту уже сегодня.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Icon name="Clock" className="text-primary" size={28} />
                  </div>
                  <p className="font-semibold text-gray-900">15 минут</p>
                  <p className="text-sm text-gray-600">на рассмотрение</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Icon name="Percent" className="text-primary" size={28} />
                  </div>
                  <p className="font-semibold text-gray-900">От 0.5%</p>
                  <p className="text-sm text-gray-600">в день</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Icon name="Smartphone" className="text-primary" size={28} />
                  </div>
                  <p className="font-semibold text-gray-900">Онлайн</p>
                  <p className="text-sm text-gray-600">24/7</p>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
                  <CardTitle className="text-2xl text-center">Получить займ</CardTitle>
                  <CardDescription className="text-center text-white/90">
                    Заполните заявку за 2 минуты
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleLoanApplication} className="space-y-6">
                    <div>
                      <Label htmlFor="amount" className="text-base font-medium">Сумма займа</Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="От 1 000 до 500 000 ₽"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        className="mt-2 h-12 text-lg"
                        min="1000"
                        max="500000"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium">Номер телефона</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="mt-2 h-12 text-lg"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-105"
                    >
                      Получить деньги
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Требования к заемщикам */}
      <section id="requirements" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Требования к заемщикам
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Icon name="User" className="text-primary" size={24} />
                  <span>Возраст и гражданство</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Возраст от 18 до 75 лет</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Гражданство РФ</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Постоянная регистрация</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Icon name="FileText" className="text-secondary" size={24} />
                  <span>Документы</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Паспорт РФ</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Второй документ (СНИЛС, ИНН)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Действующий номер телефона</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Icon name="Wallet" className="text-primary" size={24} />
                  <span>Финансовые требования</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Стабильный доход</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Банковская карта</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Отсутствие просрочек</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-secondary" size={24} />
                  <span>Дополнительно</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Работа от 3 месяцев</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Контактные данные</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Адрес электронной почты</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Часто задаваемые вопросы
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-md border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:no-underline">
                Как быстро я получу деньги?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                После одобрения заявки деньги поступают на вашу карту в течение 15 минут. 
                Рассмотрение заявки занимает до 15 минут в рабочее время.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:no-underline">
                Какие документы нужны для займа?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Для получения займа необходимы только паспорт РФ и второй документ 
                (СНИЛС, ИНН, водительские права). Справки о доходах не требуются.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:no-underline">
                Какая процентная ставка?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Процентная ставка составляет от 0.5% до 2% в день в зависимости от суммы займа, 
                срока и вашей кредитной истории. Точная ставка указывается в договоре.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:no-underline">
                Могу ли я досрочно погасить займ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Да, вы можете погасить займ досрочно в любой момент без комиссий и штрафов. 
                Проценты начисляются только за фактические дни пользования займом.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-md border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:no-underline">
                Что делать, если не могу вовремя вернуть займ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Обязательно свяжитесь с нами до даты платежа. Мы предложим варианты 
                реструктуризации или продления займа на выгодных условиях.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg shadow-md border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:no-underline">
                Работаете ли вы с плохой кредитной историей?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Да, мы рассматриваем заявки клиентов с различной кредитной историей. 
                Каждая заявка оценивается индивидуально.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Безопасность */}
      <section id="security" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Безопасность и защита данных
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">SSL-шифрование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Все данные передаются по защищенному соединению с 256-битным шифрованием
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Lock" className="text-green-600" size={32} />
                </div>
                <CardTitle className="text-xl">Защита данных</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Персональные данные хранятся согласно ФЗ-152 "О персональных данных"
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="FileCheck" className="text-purple-600" size={32} />
                </div>
                <CardTitle className="text-xl">Лицензия ЦБ РФ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Работаем на основании лицензии Центрального Банка Российской Федерации
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Ваши данные в безопасности</h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Мы используем банковские стандарты защиты информации. Ваши персональные 
                данные не передаются третьим лицам и используются только для оценки 
                заявки на микрозайм.
              </p>
              <div className="flex justify-center items-center space-x-8 mt-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span className="text-gray-700">Защищено 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span className="text-gray-700">Не передаем данные</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span className="text-gray-700">Соответствие ГОСТ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="CreditCard" className="text-primary" size={32} />
                <h5 className="text-xl font-bold">МикроЗайм</h5>
              </div>
              <p className="text-gray-400">
                Быстрые займы онлайн с мгновенным одобрением
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Займы</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Первый займ 0%</li>
                <li>Займ до зарплаты</li>
                <li>Крупные займы</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Поддержка</h6>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (800) 123-45-67</li>
                <li>support@microzaim.ru</li>
                <li>Работаем 24/7</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Документы</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Пользовательское соглашение</li>
                <li>Политика конфиденциальности</li>
                <li>Тарифы</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МикроЗайм. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}