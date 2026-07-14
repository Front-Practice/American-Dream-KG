import { useEffect, useMemo, useState } from 'react';
import { branches, courses, extraPrograms, faqs, registrationUrl } from './data.js';

const iconPaths = {
  pin: <><path d="M12 21s7-5.2 7-12A7 7 0 1 0 5 9c0 6.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></>,
  arrow: <path d="m9 18 6-6-6-6" />,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9L12 3Z" />,
  book: <><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5"/></>,
  exam: <><path d="M7 3h10v18H7zM10 7h4M10 11h4M10 15h2"/><path d="m14 17 1.5 1.5L19 15"/></>,
  screen: <><path d="M4 6h16v12H4zM8 10h8M8 14h5"/></>,
  math: <><path d="M5 19 19 5M7 5h4v4H7zM13 15h4v4h-4z"/></>,
  page: <><path d="M5 4h14v16H5zM9 8h6M9 12h6M9 16h3"/></>,
  code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8"/><path d="M19 8v6M16 11h6"/></>,
  shield: <><path d="M12 3 4 7v5c0 5 3.4 8 8 9 4.6-1 8-4 8-9V7l-8-4Z"/><path d="m9 12 2 2 4-5"/></>,
  chart: <><path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/></>,
  clock: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
  check: <path d="m5 12 4 4L19 6" />,
  target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="m15 9 5-5"/></>,
  chat: <path d="M21 12a8 8 0 0 1-9 8 9 9 0 0 1-4 1l1-3a8 8 0 1 1 12-6Z" />,
};

const courseIcons = ['book', 'exam', 'screen', 'math', 'page', 'code'];

function Icon({ name, className = '' }) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true">{iconPaths[name]}</svg>;
}

function Button({ children, secondary = false, light = false, large = false, className = '' }) {
  const classes = ['button', secondary && 'button-secondary', light && 'button-light', large && 'large', className].filter(Boolean).join(' ');
  return <a className={classes} href={registrationUrl}>{children}</a>;
}

function SectionHeader({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-head reveal ${centered ? 'centered' : ''}`}>
      <div>
        <span className={`eyebrow ${centered ? 'centered-eye' : ''}`}><i />{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const home = window.location.pathname.startsWith('/registration') ? '/' : '';

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Icon name="pin" />5 филиалов в Оше и Ошской области</span>
          <div className="topbar-links"><a href="https://www.instagram.com/americandream.osh/" target="_blank" rel="noreferrer">Instagram</a><a href="tel:+996700000000">+996 700 000 000</a></div>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-row">
          <a className="logo-link" href={`${home}#top`} aria-label="American Dream — главная"><img src="/assets/american-dream-logo.png" width="210" height="60" alt="American Dream" /></a>
          <nav className={`main-nav ${open ? 'open' : ''}`} id="main-nav" aria-label="Главная навигация">
            <a href={`${home}#courses`} onClick={close}>Курсы</a>
            <a href={`${home}#method`} onClick={close}>Как мы учим</a>
            <a href={`${home}#teachers`} onClick={close}>Преподаватели</a>
            <a href={`${home}#branches`} onClick={close}>Филиалы</a>
            <a href={`${home}#faq`} onClick={close}>Вопросы</a>
          </nav>
          <Button className="header-cta">Записаться</Button>
          <button className="menu-button" type="button" aria-controls="main-nav" aria-expanded={open} aria-label={open ? 'Закрыть меню' : 'Открыть меню'} onClick={() => setOpen(value => !value)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">{open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
          </button>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-shape" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow"><i />Образование, которое меняет будущее</span>
          <h1>Учимся сегодня.<br /><em>Создаём возможности</em><br />на всю жизнь.</h1>
          <p>Английский, IELTS, математика, иностранные языки и программирование — в сильной среде, где каждый ученик понимает цель и видит свой прогресс.</p>
          <div className="hero-actions"><Button>Выбрать курс <Icon name="arrow" /></Button><a className="button button-secondary" href="#courses">Все направления</a></div>
          <div className="hero-facts"><div><strong>5</strong><span>филиалов</span></div><div><strong>15+</strong><span>направлений</span></div><div><strong>1</strong><span>понятная цель — результат</span></div></div>
        </div>
        <div className="hero-media reveal delay-1">
          <div className="photo-wrap"><img src="/assets/students-classroom.webp" width="800" height="500" alt="Ученики American Dream на занятии" /></div>
          <div className="media-note note-top"><span className="note-icon"><Icon name="star" /></span><span><strong>Сильные преподаватели</strong><small>Знания + поддержка</small></span></div>
          <div className="media-note note-bottom"><span className="avatars"><i>EN</i><i>IT</i><i>MA</i></span><span><strong>Учимся вместе</strong><small>Малые группы и практика</small></span></div>
        </div>
      </div>
    </section>
  );
}

function Courses() {
  const filters = [
    ['all', 'Все'], ['languages', 'Языки'], ['exam', 'Экзамены'], ['kids', 'Детям'], ['academic', 'Школьные'], ['digital', 'IT'],
  ];
  const [filter, setFilter] = useState('all');
  const visible = useMemo(() => filter === 'all' ? courses : courses.filter(course => course.category === filter), [filter]);

  return (
    <section className="course-section section" id="courses">
      <div className="container">
        <SectionHeader eyebrow="Найдите своё направление" title={<>Курсы для <em>реальных целей</em></>} description="От первых слов на английском до международных экзаменов и востребованных цифровых навыков." />
        <div className="course-filters" role="group" aria-label="Фильтр курсов">
          {filters.map(([value, label]) => <button type="button" key={value} className={filter === value ? 'active' : ''} aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>)}
        </div>
        <div className="course-grid react-course-grid">
          {visible.map((course) => {
            const index = courses.findIndex(item => item.id === course.id);
            return (
              <article className="course-card reveal visible" key={course.id} tabIndex="0">
                <div className={`course-icon ${course.tone}`}><Icon name={courseIcons[index]} /></div>
                <span className="course-age">{course.label}</span><h3>{course.title}</h3><p>{course.description}</p>
                <ul className="course-details">{course.details.map(detail => <li key={detail}><Icon name="check" />{detail}</li>)}</ul>
                <a href={registrationUrl}>Записаться <span>→</span></a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExtraPrograms() {
  const [expanded, setExpanded] = useState(false);
  const visiblePrograms = expanded ? extraPrograms : extraPrograms.slice(0, 4);
  return (
    <section className="programs-section section">
      <div className="container programs-shell">
        <div className="programs-title reveal"><span className="eyebrow light"><i />Больше возможностей</span><h2>Дополнительные <em>направления</em></h2><p>Состав программ зависит от филиала. Мы поможем уточнить ближайшую группу и расписание.</p></div>
        <div className="program-list reveal delay-1">{visiblePrograms.map((program, index) => <article key={program.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{program.title}</h3><p>{program.text}</p></div></article>)}</div>
        <button className="program-toggle" type="button" aria-expanded={expanded} onClick={() => setExpanded(value => !value)}>{expanded ? 'Показать меньше' : 'Показать все направления'} <span aria-hidden="true">{expanded ? '−' : '+'}</span></button>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    ['01', 'Определяем уровень и цель', 'Подбираем программу под возраст, знания и ожидаемый результат.'],
    ['02', 'Учимся через практику', 'Объясняем понятно, закрепляем упражнениями и реальными задачами.'],
    ['03', 'Следим за прогрессом', 'Даём обратную связь ученику и родителям, корректируем план.'],
    ['04', 'Закрепляем результат', 'Помогаем применять знания уверенно — на экзамене, в школе и жизни.'],
  ];
  return <section className="method-section section" id="method"><div className="container method-grid"><div className="method-copy reveal"><span className="eyebrow light"><i />Подход American Dream</span><h2>Не просто занятия.<br /><em>Путь к результату.</em></h2><p>Мы соединяем понятную программу, живую практику и регулярную обратную связь. Ученик всегда знает, что уже умеет и какой шаг будет следующим.</p><Button light>Получить консультацию</Button></div><ol className="steps reveal delay-1">{steps.map(([number, title, text]) => <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}</ol></div></section>;
}

function Teachers() {
  const principles = [
    ['Экспертность', 'Преподаватель глубоко знает предмет и умеет объяснить сложное простыми словами.'],
    ['Методика', 'Каждое занятие имеет цель, структуру, практику и понятный результат для ученика.'],
    ['Поддержка', 'Безопасная атмосфера помогает задавать вопросы, ошибаться и продолжать расти.'],
  ];
  return <section className="teachers section" id="teachers"><div className="container teacher-layout"><div className="teacher-visual reveal"><div className="teacher-board"><span>AMERICAN DREAM</span><strong>Сильный учитель<br />создаёт уверенного<br /><em>ученика.</em></strong></div><div className="teacher-chip"><Icon name="chat" /><span><strong>Понятная обратная связь</strong><small>после каждого этапа</small></span></div></div><div className="teacher-copy reveal delay-1"><span className="eyebrow"><i />Команда преподавателей</span><h2>Знания важны.<br /><em>Умение вдохновить — тоже.</em></h2><p>Мы ценим преподавателей, которые умеют удерживать внимание, видеть потребности ученика и превращать урок в понятный путь вперёд.</p><div className="teacher-principles">{principles.map(([title, text], index) => <div key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{title}</strong><p>{text}</p></div></div>)}</div></div></div></section>;
}

function Benefits() {
  const items = [
    ['users', 'Малые группы', 'Преподаватель видит прогресс каждого ученика и успевает дать обратную связь.'],
    ['shield', 'Проверенная программа', 'Последовательные модули, понятные цели и материалы под возраст и уровень.'],
    ['chart', 'Видимый прогресс', 'Регулярная диагностика помогает видеть рост и вовремя усиливать слабые стороны.'],
    ['clock', 'Удобное расписание', 'Несколько филиалов и разные группы помогают встроить учёбу в ритм семьи.'],
  ];
  return <section className="benefits section" id="about"><div className="container"><SectionHeader centered eyebrow="Почему American Dream" title={<>Среда, в которой <em>хочется расти</em></>} description="Внимание к ученику, сильная методика и атмосфера, поддерживающая интерес к знаниям."/><div className="benefit-grid">{items.map(([icon, title, text], index) => <article className="benefit-card reveal" key={title}><span>{String(index + 1).padStart(2, '0')}</span><Icon name={icon}/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>;
}

function Admissions() {
  const stages = [
    ['Заявка', 'Вы оставляете контакты и выбираете интересующий курс.'],
    ['Консультация', 'Администратор уточняет цель, возраст, уровень и удобный филиал.'],
    ['Подбор группы', 'Мы предлагаем подходящее расписание и отвечаем на вопросы.'],
    ['Старт обучения', 'Ученик знакомится с преподавателем и начинает программу.'],
  ];
  return <section className="admissions section"><div className="container"><SectionHeader eyebrow="Как начать обучение" title={<>От заявки до первого урока — <em>четыре шага</em></>} description="Простой процесс без лишней переписки: оставьте данные, а мы поможем с выбором."/><div className="admission-track">{stages.map(([title,text],index)=><article className="admission-step reveal" key={title}><span>{index+1}</span><h3>{title}</h3><p>{text}</p>{index < stages.length - 1 && <i aria-hidden="true"/>}</article>)}</div></div></section>;
}

function Branches() {
  return <section className="branches section" id="branches"><div className="container"><SectionHeader eyebrow="Мы рядом" title={<>Выберите <em>удобный филиал</em></>} description="Пять учебных пространств в Оше и Ошской области. Направления могут отличаться по филиалам."/><div className="branch-grid">{branches.map((branch,index)=><article className={`branch-card reveal ${branch.featured?'main-branch':''}`} key={branch.id}>{branch.featured?<div className="branch-label">Главный филиал</div>:<span className="branch-no">{String(index+1).padStart(2,'0')}</span>}<h3>{branch.name}</h3><p>{branch.address}</p><div className="branch-tags">{branch.programs.map(program=><span key={program}>{program}</span>)}</div><a href={registrationUrl}>Выбрать филиал →</a></article>)}</div></div></section>;
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return <section className="faq section" id="faq"><div className="container faq-grid"><div className="faq-intro reveal"><span className="eyebrow"><i />Частые вопросы</span><h2>Всё, что важно <em>перед стартом</em></h2><p>Если ответа нет, оставьте заявку — администратор поможет выбрать курс, филиал и удобное время.</p><a className="text-link" href={registrationUrl}>Задать свой вопрос →</a></div><div className="accordion reveal delay-1">{faqs.map((faq,index)=><div className={`faq-item ${openIndex===index?'open':''}`} key={faq.question}><button type="button" aria-expanded={openIndex===index} onClick={()=>setOpenIndex(openIndex===index?-1:index)}>{faq.question}<span/></button>{openIndex===index&&<p>{faq.answer}</p>}</div>)}</div></div></section>;
}

function Footer() {
  const home = window.location.pathname.startsWith('/registration') ? '/' : '';
  return <footer className="footer"><div className="container footer-grid"><div><img src="/assets/american-dream-logo.png" width="210" height="60" alt="American Dream"/><p>Образовательный центр для детей, подростков и взрослых в Оше и Ошской области.</p><a className="instagram" href="https://www.instagram.com/americandream.osh/" target="_blank" rel="noreferrer">Instagram @americandream.osh</a></div><div><h3>Направления</h3><a href={`${home}#courses`}>Английский</a><a href={`${home}#courses`}>IELTS</a><a href={`${home}#courses`}>Математика</a><a href={`${home}#courses`}>Программирование</a></div><div><h3>Центр</h3><a href={`${home}#method`}>Как мы учим</a><a href={`${home}#teachers`}>Преподаватели</a><a href={`${home}#branches`}>Филиалы</a><a href={`${home}#faq`}>Вопросы</a></div><div><h3>Контакты</h3><a href="tel:+996700000000">+996 700 000 000</a><p>Главный филиал:<br/>ул. Атабаева, 21, Ош</p><a href={registrationUrl}>Онлайн-запись</a></div></div><div className="container footer-bottom"><span>© 2026 American Dream. Все права защищены.</span><span>Ош, Кыргызская Республика</span></div></footer>;
}

function RegistrationPage() {
  const [status, setStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Запись на обучение — American Dream';
  }, []);

  const submitRegistration = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setSubmitError('');
    const form = event.currentTarget;
    const fields = new FormData(form);
    const age = Number(fields.get('studentAge'));
    const preferredTime = fields.get('preferredTime');
    const message = String(fields.get('message') || '').trim();
    const studentDetails = [
      `${fields.get('childName')} (${age} лет)`,
      preferredTime ? `удобное время: ${preferredTime}` : '',
      message ? `комментарий: ${message}` : '',
    ].filter(Boolean).join(', ');
    const payload = {
      clientName: String(fields.get('clientName')).trim(),
      childName: studentDetails,
      phone: String(fields.get('phone')).trim(),
      course: fields.get('course'),
      source: fields.get('source'),
      branchIds: [Number(fields.get('branchId'))],
    };
    try {
      const response = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        let messageText = `Ошибка сервера (${response.status}).`;
        try {
          const data = await response.json();
          if (data?.message) messageText = Array.isArray(data.message) ? data.message.join(', ') : data.message;
        } catch { /* Server did not return JSON. */ }
        throw new Error(messageText);
      }
      form.reset();
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setSubmitError(error.message || 'Не удалось отправить заявку. Попробуйте позже.');
    }
  };

  return (
    <div className="registration-page">
      <a className="skip-link" href="#registration-form">Перейти к форме</a>
      <Header />
      <main>
        <section className="registration-hero">
          <div className="registration-orbit" aria-hidden="true" />
          <div className="container registration-hero-grid">
            <div className="registration-intro">
              <a className="back-link" href="/">← Вернуться на главную</a>
              <span className="eyebrow light"><i />Онлайн-запись</span>
              <h1>Первый шаг к вашей <em>новой цели</em></h1>
              <p>Расскажите, какое направление вас интересует. Администратор American Dream свяжется с вами, подберёт филиал и удобную группу.</p>
              <div className="registration-promises">
                <div><Icon name="clock" /><span><strong>Быстрый ответ</strong><small>Свяжемся и уточним детали</small></span></div>
                <div><Icon name="target" /><span><strong>Точный подбор</strong><small>По возрасту, уровню и цели</small></span></div>
                <div><Icon name="shield" /><span><strong>Без обязательств</strong><small>Консультация бесплатная</small></span></div>
              </div>
            </div>

            <div className="registration-card" id="registration-form">
              {status === 'success' ? (
                <div className="form-success" role="status">
                  <span><Icon name="check" /></span>
                  <p className="form-kicker">Заявка отправлена</p>
                  <h2>Спасибо! Скоро свяжемся.</h2>
                  <p>Администратор уточнит детали и поможет выбрать подходящую группу.</p>
                  <a className="button" href="/">Вернуться на главную</a>
                </div>
              ) : (
                <>
                  <div className="form-heading">
                    <span>Заявка занимает около 2 минут</span>
                    <h2>Записаться на обучение</h2>
                    <p>Поля со звёздочкой обязательны.</p>
                  </div>
                  <form onSubmit={submitRegistration}>
                    <div className="form-grid">
                      <label className="field"><span>Имя родителя / заявителя *</span><input name="clientName" type="text" autoComplete="name" placeholder="Например, Айдана" required /></label>
                      <label className="field"><span>Номер телефона *</span><input name="phone" type="tel" autoComplete="tel" placeholder="+996 700 000 000" required /></label>
                      <label className="field"><span>Имя ученика *</span><input name="childName" type="text" placeholder="Например, Али" required /></label>
                      <label className="field"><span>Возраст ученика *</span><input name="studentAge" type="number" min="1" max="99" placeholder="Например, 16" required /></label>
                      <label className="field"><span>Направление *</span><select name="course" defaultValue="" required><option value="" disabled>Выберите курс</option>{courses.map(course => <option key={course.id} value={course.apiKey}>{course.title}</option>)}{extraPrograms.map(program => <option key={program.title} value={program.apiKey}>{program.title}</option>)}</select></label>
                      <label className="field"><span>Удобный филиал *</span><select name="branchId" defaultValue="" required><option value="" disabled>Выберите филиал</option>{branches.map(branch => <option key={branch.id} value={branch.id}>{branch.name} — {branch.address}</option>)}</select></label>
                      <label className="field"><span>Откуда вы о нас узнали? *</span><select name="source" defaultValue="" required><option value="" disabled>Выберите вариант</option><option>WhatsApp</option><option>Instagram</option><option>Таргет (реклама)</option><option>Родственники / знакомые</option><option>Другое</option></select></label>
                      <label className="field"><span>Удобное время</span><select name="preferredTime" defaultValue=""><option value="">Не имеет значения</option><option>Утро</option><option>День</option><option>Вечер</option><option>Выходные</option></select></label>
                      <label className="field field-full"><span>Комментарий</span><textarea name="message" rows="3" placeholder="Расскажите о цели или задайте вопрос" /></label>
                    </div>
                    <label className="consent"><input type="checkbox" name="consent" required /><span>Я согласен(на) на обработку данных для связи по заявке.</span></label>
                    {status === 'error' && <p className="form-error" role="alert">{submitError}</p>}
                    <button className="button registration-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Отправляем…' : <>Отправить заявку <Icon name="arrow" /></>}</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  if (window.location.pathname.startsWith('/registration')) return <RegistrationPage />;

  return <><a className="skip-link" href="#main">Перейти к содержанию</a><Header/><main id="main"><Hero/><Courses/><ExtraPrograms/><Method/><Teachers/><Benefits/><Admissions/><Branches/><FAQ/><section className="cta-section"><div className="container cta-card reveal"><div><span className="eyebrow light"><i/>Начните с простого шага</span><h2>Выберите курс,<br/><em>который подходит вам</em></h2><p>Оставьте заявку — мы уточним цель, подберём филиал и расскажем о ближайших группах.</p></div><div className="cta-actions"><Button light large>Оставить заявку <Icon name="arrow"/></Button><span>Ответим и поможем с выбором</span></div></div></section></main><Footer/></>;
}

export default App;
