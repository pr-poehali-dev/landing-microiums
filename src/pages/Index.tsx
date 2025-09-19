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
            <span className="text-2xl font-bold text-gray-900">МикроЗайм</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О займах</a>
            <a href="#requirements" className="text-gray-700 hover:text-primary transition-colors">Требования</a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Главный блок */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Микрозаймы онлайн на карту мгновенно без отказа – получить микрозайм быстро и без процентов
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                В современном мире финансовые трудности могут возникнуть неожиданно. Когда нужны деньги срочно, микрозайм становится оптимальным решением. Наш сервис поможет вам быстро найти и оформить микрозаем онлайн на выгодных условиях без лишних формальностей.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Icon name="Clock" className="text-primary" size={28} />
                  </div>
                  <p className="font-semibold text-gray-900">5 минут</p>
                  <p className="text-sm text-gray-600">рассмотрение</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Icon name="Percent" className="text-primary" size={28} />
                  </div>
                  <p className="font-semibold text-gray-900">Без %</p>
                  <p className="text-sm text-gray-600">первый займ</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Icon name="CreditCard" className="text-primary" size={28} />
                  </div>
                  <p className="font-semibold text-gray-900">На карту</p>
                  <p className="text-sm text-gray-600">мгновенно</p>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
              <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
                  <CardTitle className="text-2xl text-center">Получить микрозайм</CardTitle>
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

      {/* О микрозаймах */}
      <section id="about" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Что такое микрозайм и его преимущества</h2>
              <p className="text-lg text-gray-600 mb-6">
                Микрозайм – это небольшая сумма денег, которую можно получить на короткий срок под минимальные проценты или вовсе без них. В отличие от банковских кредитов, микрозаймы выдаются быстро и с минимальными требованиями к заемщику.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Основные преимущества микрозаймов:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="text-green-500" size={20} />
                    <span>Быстрое рассмотрение заявки – от 5 минут</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="text-green-500" size={20} />
                    <span>Минимальный пакет документов</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="text-green-500" size={20} />
                    <span>Возможность получить микрозайм без процентов для новых клиентов</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="text-green-500" size={20} />
                    <span>Микрозайм на карту в любое время суток</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Check" className="text-green-500" size={20} />
                    <span>Не требуется справка о доходах</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Как взять микрозайм онлайн без отказа</h2>
              <p className="text-lg text-gray-600 mb-6">
                Чтобы взять микрозаем через интернет, вам потребуется:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                  <span>Выбрать надежную микрофинансовую организацию</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                  <span>Заполнить онлайн-заявку на сайте</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                  <span>Указать данные паспорта и банковской карты</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</div>
                  <span>Дождаться одобрения (обычно 5-15 минут)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">5</div>
                  <span>Получить микрозайм на карту мгновенно</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mt-6">
                Современные МФО предлагают микрозаймы онлайн без отказа даже клиентам с плохой кредитной историей. Главное условие – достижение совершеннолетия и наличие российского паспорта.
              </p>
            </div>
          </div>

          {/* Блок без процентов */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Микрозаймы без процентов – реальная экономия</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Многие компании предлагают первый микрозаем без процентов для привлечения новых клиентов. Это отличная возможность решить финансовые проблемы абсолютно бесплатно.
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Условия получения микрозайма без процентов:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Star" className="text-primary" size={20} />
                    <span>Первое обращение в компанию</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Star" className="text-primary" size={20} />
                    <span>Сумма до 15 000 рублей</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Star" className="text-primary" size={20} />
                    <span>Срок возврата до 30 дней</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Star" className="text-primary" size={20} />
                    <span>Своевременное погашение задолженности</span>
                  </div>
                </div>
              </div>
              
              <Card className="border-l-4 border-l-primary shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <Icon name="CreditCard" className="text-primary" size={24} />
                    <span>Микрозайм на карту без процентов</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Получить микрозаем без процентов на карту можно круглосуточно. Деньги поступают на банковскую карту в течение нескольких минут после одобрения заявки.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Требования к заемщикам */}
      <section id="requirements" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Требования к заемщикам
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Для получения микрозайма необходимо соответствовать базовым требованиям. Справка о доходах не требуется, что делает микрозаймы онлайн доступными для всех категорий граждан, включая пенсионеров, студентов и безработных.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Icon name="User" className="text-primary" size={24} />
                  <span>Основные требования</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Возраст от 18 до 70 лет</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Гражданство РФ</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Действующий паспорт</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Icon name="Smartphone" className="text-secondary" size={24} />
                  <span>Контакты и карта</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Мобильный телефон</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Банковская карта для получения средств</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" className="text-green-500" size={20} />
                  <span>Справка о доходах НЕ нужна</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Погашение микрозайма</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Своевременное погашение микрозаймов – залог положительной кредитной истории. Большинство МФО предлагают удобные способы возврата:
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Icon name="Building2" className="text-primary mx-auto mb-3" size={32} />
                  <p className="font-semibold">Банковским переводом</p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Icon name="CreditCard" className="text-primary mx-auto mb-3" size={32} />
                  <p className="font-semibold">Через терминалы и банкоматы</p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Icon name="Monitor" className="text-primary mx-auto mb-3" size={32} />
                  <p className="font-semibold">Онлайн через личный кабинет</p>
                </CardContent>
              </Card>
              <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Icon name="Zap" className="text-primary mx-auto mb-3" size={32} />
                  <p className="font-semibold">Автоплатежом с карты</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-md border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:no-underline">
                Что делать при просрочке?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Если возникли трудности с возвратом, важно сразу связаться с кредитором. Многие компании идут навстречу и предлагают: реструктуризацию долга, рассрочку платежа, продление срока займа.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-md border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:no-underline">
                Как выбрать надежную МФО?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                При выборе компании для получения микрозайма обратите внимание на: наличие лицензии ЦБ РФ, прозрачные условия и тарифы, положительные отзывы клиентов, удобный сайт и мобильное приложение, качество клиентской поддержки.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-md border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:no-underline">
                Какие существуют альтернативы микрозаймам?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Если микрозайм не подходит, рассмотрите альтернативные варианты: кредитная карта с льготным периодом, потребительский кредит в банке, займ у друзей или родственников, продажа ненужных вещей, подработка или фриланс.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-md border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:no-underline">
                Можно ли получить микрозайм с плохой кредитной историей?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Да, многие МФО предлагают микрозаймы онлайн без отказа даже клиентам с плохой кредитной историей. Главное условие – достижение совершеннолетия и наличие российского паспорта.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-md border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:no-underline">
                Для чего предназначены микрозаймы?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Микрозайм предназначен для краткосрочных финансовых нужд. Не стоит использовать их для покрытия регулярных расходов или крупных покупок. Берите в долг только ту сумму, которую сможете вернуть в установленный срок.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg shadow-md border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:no-underline">
                Как быстро можно получить микрозайм?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600">
                Получить микрозайм онлайн на карту сегодня проще, чем когда-либо. Рассмотрение заявки занимает от 5 до 15 минут, а деньги поступают на карту мгновенно после одобрения.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Заключение */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Заключение</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-lg text-gray-600 mb-6">
              Микрозаймы – это современный финансовый инструмент, который помогает быстро решить временные денежные трудности. Главное – выбирать проверенные компании и ответственно подходить к возврату средств.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Помните: микрозайм предназначен для краткосрочных финансовых нужд. Не стоит использовать их для покрытия регулярных расходов или крупных покупок. Берите в долг только ту сумму, которую сможете вернуть в установленный срок.
            </p>
            <p className="text-xl font-semibold text-gray-900">
              Получить микрозайм онлайн на карту сегодня проще, чем когда-либо. Воспользуйтесь нашим сервисом сравнения предложений и выберите оптимальные условия для ваших потребностей.
            </p>
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