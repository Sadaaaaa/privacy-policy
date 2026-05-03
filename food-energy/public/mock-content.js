// Render rich mock screens into [data-mock] containers

const MOCK_TPL = {
  home: () => `
    <div class="dynamic-island"></div>
    <div class="statusbar">
      <span>22:20</span>
      <span class="right">
        <svg viewBox="0 0 60 36"><g fill="#0c1828"><rect x="0" y="22" width="10" height="14" rx="1"/><rect x="14" y="16" width="10" height="20" rx="1"/><rect x="28" y="10" width="10" height="26" rx="1"/><rect x="42" y="2" width="10" height="34" rx="1"/></g></svg>
        <svg viewBox="0 0 36 28"><path fill="#0c1828" d="M18 4c8 0 14 5 16 8l-3 3c-2-3-7-7-13-7s-11 4-13 7l-3-3c2-3 8-8 16-8zm0 8c5 0 9 3 11 6l-3 3c-2-2-5-4-8-4s-6 2-8 4l-3-3c2-3 6-6 11-6zm0 8c2 0 4 1 5 3l-5 5-5-5c1-2 3-3 5-3z"/></svg>
        <svg viewBox="0 0 50 28"><rect x="1" y="3" width="42" height="22" rx="6" fill="none" stroke="#0c1828" stroke-width="2"/><rect x="44" y="10" width="3" height="8" rx="1" fill="#0c1828"/><rect x="3" y="5" width="38" height="18" rx="4" fill="#0c1828"/></svg>
      </span>
    </div>

    <div class="title">Food energy</div>

    <div class="summary">
      <div class="kcal-row">
        <div class="kcal-num">1,438</div>
        <div class="kcal-of"><span data-en="of 2000 kcal" data-ru="из 2000 ккал">of 2000 kcal</span></div>
      </div>
      <div class="progress"><div class="fill"></div></div>
      <div class="remaining"><span data-en="562 kcal remaining" data-ru="осталось 562 ккал">562 kcal remaining</span></div>
    </div>

    <div class="macros">
      <div class="macro m-protein">
        <div class="v">86g</div>
        <div class="of">of 125g</div>
        <div class="name"><span data-en="Protein" data-ru="Белки">Protein</span></div>
        <div class="bar" style="--p: 70%"></div>
      </div>
      <div class="macro m-carbs">
        <div class="v">142g</div>
        <div class="of">of 225g</div>
        <div class="name"><span data-en="Carbs" data-ru="Углеводы">Carbs</span></div>
        <div class="bar" style="--p: 63%"></div>
      </div>
      <div class="macro m-fat">
        <div class="v">48g</div>
        <div class="of">of 67g</div>
        <div class="name"><span data-en="Fat" data-ru="Жиры">Fat</span></div>
        <div class="bar" style="--p: 72%"></div>
      </div>
    </div>

    <div class="actions">
      <div class="btn primary">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/></svg>
        <span data-en="Scan Food" data-ru="Сканировать">Scan Food</span>
      </div>
      <div class="btn secondary">+ <span data-en="Add" data-ru="Добавить">Add</span></div>
    </div>

    <div class="meals-header">
      <div class="meals-title"><span data-en="Today's Meals" data-ru="Приёмы за сегодня">Today's Meals</span></div>
      <div class="meals-count"><span data-en="5 items" data-ru="5 шт">5 items</span></div>
    </div>

    <div class="meal-section">
      <div class="meal-label" style="color: #f59e0b">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="4" fill="#f59e0b"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        <span data-en="Breakfast" data-ru="Завтрак">Breakfast</span>
      </div>
      <div class="meal-card">
        <div class="meal-thumb"><img src="food-photos/toast.jpg" alt=""></div>
        <div class="meal-info">
          <div class="meal-name"><span data-en="Avocado toast" data-ru="Тост с авокадо">Avocado toast</span></div>
          <div class="meal-time">08:24 · 180g</div>
        </div>
        <div class="meal-kcal-wrap">
          <div class="meal-kcal">312 kcal</div>
          <div class="meal-grams">P 11g · C 28g · F 19g</div>
        </div>
      </div>
      <div class="meal-card">
        <div class="meal-thumb"><img src="food-photos/coffee.jpg" alt=""></div>
        <div class="meal-info">
          <div class="meal-name"><span data-en="Latte, oat milk" data-ru="Латте на овсяном">Latte, oat milk</span></div>
          <div class="meal-time">08:30 · 250ml</div>
        </div>
        <div class="meal-kcal-wrap">
          <div class="meal-kcal">128 kcal</div>
          <div class="meal-grams">P 4g · C 18g · F 4g</div>
        </div>
      </div>
    </div>

    <div class="meal-section">
      <div class="meal-label" style="color: #16a34a">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h18a8 8 0 01-8 8h-2a8 8 0 01-8-8z" fill="#16a34a"/><path d="M7 11V8a5 5 0 0110 0v3"/><line x1="3" y1="22" x2="21" y2="22"/></svg>
        <span data-en="Lunch" data-ru="Обед">Lunch</span>
      </div>
      <div class="meal-card">
        <div class="meal-thumb"><img src="food-photos/salmon.jpg" alt=""></div>
        <div class="meal-info">
          <div class="meal-name"><span data-en="Grilled salmon, rice" data-ru="Лосось гриль с рисом">Grilled salmon, rice</span></div>
          <div class="meal-time">13:42 · 320g</div>
        </div>
        <div class="meal-kcal-wrap">
          <div class="meal-kcal">486 kcal</div>
          <div class="meal-grams">P 38g · C 42g · F 16g</div>
        </div>
      </div>
      <div class="meal-card">
        <div class="meal-thumb"><img src="food-photos/salad.jpg" alt=""></div>
        <div class="meal-info">
          <div class="meal-name"><span data-en="Greek salad" data-ru="Греческий салат">Greek salad</span></div>
          <div class="meal-time">13:55 · 220g</div>
        </div>
        <div class="meal-kcal-wrap">
          <div class="meal-kcal">218 kcal</div>
          <div class="meal-grams">P 8g · C 14g · F 16g</div>
        </div>
      </div>
    </div>

    <div class="meal-section">
      <div class="meal-label" style="color: #7c3aed">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8" fill="#7c3aed"/><path d="M12 5V2M9 3l3 2 3-2" stroke="#7c3aed"/></svg>
        <span data-en="Snack" data-ru="Перекус">Snack</span>
      </div>
      <div class="meal-card">
        <div class="meal-thumb"><img src="food-photos/yogurt.jpg" alt=""></div>
        <div class="meal-info">
          <div class="meal-name"><span data-en="Berry yogurt bowl" data-ru="Йогурт с ягодами">Berry yogurt bowl</span></div>
          <div class="meal-time">16:08 · 200g</div>
        </div>
        <div class="meal-kcal-wrap">
          <div class="meal-kcal">294 kcal</div>
          <div class="meal-grams">P 12g · C 38g · F 8g</div>
        </div>
      </div>
    </div>

    <div class="tabbar">
      <div class="tab active"><div class="tab-icon"><svg width="56" height="56" viewBox="0 0 24 24" fill="#16a34a"><path d="M12 3l9 8h-2v9h-5v-6h-4v6H5v-9H3z"/></svg></div>HOME</div>
      <div class="tab"><div class="tab-icon"><svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/></svg></div>SCAN</div>
      <div class="tab"><div class="tab-icon"><svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><line x1="6" y1="20" x2="6" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="14"/></svg></div>HISTORY</div>
      <div class="tab"><div class="tab-icon"><svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg></div>PROFILE</div>
    </div>
  `,

  history: () => `
    <div class="dynamic-island"></div>
    <div class="statusbar">
      <span>22:21</span>
      <span class="right">
        <svg viewBox="0 0 60 36"><g fill="#0c1828"><rect x="0" y="22" width="10" height="14" rx="1"/><rect x="14" y="16" width="10" height="20" rx="1"/><rect x="28" y="10" width="10" height="26" rx="1"/><rect x="42" y="2" width="10" height="34" rx="1"/></g></svg>
        <svg viewBox="0 0 36 28"><path fill="#0c1828" d="M18 4c8 0 14 5 16 8l-3 3c-2-3-7-7-13-7s-11 4-13 7l-3-3c2-3 8-8 16-8zm0 8c5 0 9 3 11 6l-3 3c-2-2-5-4-8-4s-6 2-8 4l-3-3c2-3 6-6 11-6zm0 8c2 0 4 1 5 3l-5 5-5-5c1-2 3-3 5-3z"/></svg>
        <svg viewBox="0 0 50 28"><rect x="1" y="3" width="42" height="22" rx="6" fill="none" stroke="#0c1828" stroke-width="2"/><rect x="44" y="10" width="3" height="8" rx="1" fill="#0c1828"/><rect x="3" y="5" width="38" height="18" rx="4" fill="#0c1828"/></svg>
      </span>
    </div>

    <div class="h-title">
      <span><span data-en="History" data-ru="История">History</span></span>
      <span class="week-pill">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#15803d" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>
        <span data-en="This Week" data-ru="Эта неделя">This Week</span>
      </span>
    </div>

    <div class="chart-card">
      <div class="chart-head">
        <div class="chart-title"><span data-en="Calorie Intake" data-ru="Калории">Calorie Intake</span></div>
        <div class="chart-avg"><span data-en="Avg: 1,724 kcal" data-ru="Среднее: 1724 ккал">Avg: 1,724 kcal</span></div>
      </div>
      <div class="chart-bars">
        <div class="bar-col"><div class="bar green" style="height: 68%"></div><div class="bar-label">Mon</div></div>
        <div class="bar-col"><div class="bar green" style="height: 82%"></div><div class="bar-label">Tue</div></div>
        <div class="bar-col"><div class="bar over" style="height: 100%"></div><div class="bar-label">Wed</div></div>
        <div class="bar-col"><div class="bar green" style="height: 75%"></div><div class="bar-label">Thu</div></div>
        <div class="bar-col"><div class="bar green" style="height: 88%"></div><div class="bar-label">Fri</div></div>
        <div class="bar-col"><div class="bar green" style="height: 70%"></div><div class="bar-label">Sat</div></div>
        <div class="bar-col"><div class="bar today" style="height: 72%"></div><div class="bar-label active">Sun</div></div>
      </div>
      <div class="legend">
        <div class="legend-item"><div class="legend-dot" style="background:#16a34a"></div><span data-en="On target" data-ru="В цели">On target</span></div>
        <div class="legend-item"><div class="legend-dot" style="background:#f97316"></div><span data-en="Over" data-ru="Сверх">Over</span></div>
        <div class="legend-item"><div class="legend-dot" style="background:#7c3aed"></div><span data-en="Today" data-ru="Сегодня">Today</span></div>
      </div>
    </div>

    <div class="stats">
      <div class="stat"><div class="v" style="color:#7c3aed">1,724</div><div class="l"><span data-en="Avg kcal/day" data-ru="Ср. ккал/день">Avg kcal/day</span></div></div>
      <div class="stat"><div class="v" style="color:#f97316">1</div><div class="l"><span data-en="Days over goal" data-ru="Дней сверх">Days over goal</span></div></div>
      <div class="stat"><div class="v" style="color:#16a34a">12,071</div><div class="l"><span data-en="Week total" data-ru="За неделю">Week total</span></div></div>
    </div>

    <div class="recent-title"><span data-en="Recent Days" data-ru="Последние дни">Recent Days</span></div>
    <div class="day-row">
      <div class="day"><div class="day-name">Mon</div><div class="day-num">21</div></div>
      <div class="day"><div class="day-name">Tue</div><div class="day-num">22</div></div>
      <div class="day"><div class="day-name">Wed</div><div class="day-num">23</div></div>
      <div class="day"><div class="day-name">Thu</div><div class="day-num">24</div></div>
      <div class="day"><div class="day-name">Fri</div><div class="day-num">25</div></div>
      <div class="day"><div class="day-name">Sat</div><div class="day-num">26</div></div>
      <div class="day active"><div class="day-name" style="color:#16a34a">Sun</div><div class="day-num">27</div><div class="dot"></div></div>
    </div>

    <div class="h-summary">
      <div class="check">✓</div>
      <div class="text">1,438 kcal · 5 meals</div>
      <div class="ontrack"><span data-en="On track" data-ru="В цели">On track</span></div>
    </div>

    <div class="h-meal">
      <div class="h-thumb"><img src="food-photos/toast.jpg" alt=""></div>
      <div class="h-meal-info">
        <div class="h-meal-name"><span data-en="Avocado toast" data-ru="Тост с авокадо">Avocado toast</span></div>
        <div class="h-meal-macros"><span class="p">P 11g</span><span class="c">C 28g</span><span class="f">F 19g</span></div>
      </div>
      <div>
        <div class="h-meal-kcal">312 kcal</div>
        <div class="h-meal-grams">180g</div>
      </div>
    </div>
    <div class="h-meal">
      <div class="h-thumb"><img src="food-photos/salmon.jpg" alt=""></div>
      <div class="h-meal-info">
        <div class="h-meal-name"><span data-en="Grilled salmon" data-ru="Лосось гриль">Grilled salmon</span></div>
        <div class="h-meal-macros"><span class="p">P 38g</span><span class="c">C 42g</span><span class="f">F 16g</span></div>
      </div>
      <div>
        <div class="h-meal-kcal">486 kcal</div>
        <div class="h-meal-grams">320g</div>
      </div>
    </div>
    <div class="h-meal">
      <div class="h-thumb"><img src="food-photos/yogurt.jpg" alt=""></div>
      <div class="h-meal-info">
        <div class="h-meal-name"><span data-en="Berry yogurt bowl" data-ru="Йогурт с ягодами">Berry yogurt bowl</span></div>
        <div class="h-meal-macros"><span class="p">P 12g</span><span class="c">C 38g</span><span class="f">F 8g</span></div>
      </div>
      <div>
        <div class="h-meal-kcal">294 kcal</div>
        <div class="h-meal-grams">200g</div>
      </div>
    </div>

    <div class="tabbar">
      <div class="tab"><div class="tab-icon"><svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><path d="M12 3l9 8h-2v9h-5v-6h-4v6H5v-9H3z"/></svg></div>HOME</div>
      <div class="tab"><div class="tab-icon"><svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/></svg></div>SCAN</div>
      <div class="tab active"><div class="tab-icon"><svg width="56" height="56" viewBox="0 0 24 24" fill="#16a34a"><line x1="6" y1="20" x2="6" y2="10" stroke="#16a34a" stroke-width="3"/><line x1="12" y1="20" x2="12" y2="4" stroke="#16a34a" stroke-width="3"/><line x1="18" y1="20" x2="18" y2="14" stroke="#16a34a" stroke-width="3"/></svg></div>HISTORY</div>
      <div class="tab"><div class="tab-icon"><svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg></div>PROFILE</div>
    </div>
  `,

  scan: () => `
    <div class="dynamic-island"></div>
    <div class="s-title">
      <span>Scan Food</span>
      <span class="pills">
        <span class="pill active">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#0c1828"><path d="M9 3l-1 2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-4l-1-2H9zm3 5a5 5 0 110 10 5 5 0 010-10z"/></svg>
        </span>
        <span class="pill">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/></svg>
        </span>
      </span>
    </div>

    <div class="scan-stage">
      <div class="plate">
        <img src="food-photos/plate.jpg" alt="">
      </div>
      <div class="detect-box">
        <div class="detect-corners"></div>
        <div class="detect-label">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#0c1828"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>
          <span data-en="Salmon plate" data-ru="Тарелка с лососем">Salmon plate</span>
          <span class="conf">94%</span>
        </div>
      </div>
    </div>

    <div class="ai-toast">
      <div class="spin"></div>
      <span data-en="Analyzing 320g portion · 486 kcal" data-ru="Анализ порции 320г · 486 ккал">Analyzing 320g portion · 486 kcal</span>
    </div>

    <div class="controls">
      <div class="ctrl">
        <div class="ctrl-icon">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>
        </div>
        <div class="ctrl-label"><span data-en="Gallery" data-ru="Галерея">Gallery</span></div>
      </div>
      <div class="shutter"></div>
      <div class="ctrl">
        <div class="ctrl-icon">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
        </div>
        <div class="ctrl-label"><span data-en="Manual" data-ru="Вручную">Manual</span></div>
      </div>
    </div>
  `,

  profile: () => `
    <div class="dynamic-island"></div>
    <div class="statusbar">
      <span>22:21</span>
      <span class="right">
        <svg viewBox="0 0 60 36"><g fill="#0c1828"><rect x="0" y="22" width="10" height="14" rx="1"/><rect x="14" y="16" width="10" height="20" rx="1"/><rect x="28" y="10" width="10" height="26" rx="1"/><rect x="42" y="2" width="10" height="34" rx="1"/></g></svg>
        <svg viewBox="0 0 36 28"><path fill="#0c1828" d="M18 4c8 0 14 5 16 8l-3 3c-2-3-7-7-13-7s-11 4-13 7l-3-3c2-3 8-8 16-8zm0 8c5 0 9 3 11 6l-3 3c-2-2-5-4-8-4s-6 2-8 4l-3-3c2-3 6-6 11-6zm0 8c2 0 4 1 5 3l-5 5-5-5c1-2 3-3 5-3z"/></svg>
        <svg viewBox="0 0 50 28"><rect x="1" y="3" width="42" height="22" rx="6" fill="none" stroke="#0c1828" stroke-width="2"/><rect x="44" y="10" width="3" height="8" rx="1" fill="#0c1828"/><rect x="3" y="5" width="38" height="18" rx="4" fill="#0c1828"/></svg>
      </span>
    </div>

    <div class="p-name">
      <span data-en="Your name" data-ru="Ваше имя">Your name</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
    </div>

    <div class="section-label"><span data-en="My Goals" data-ru="Мои цели">My Goals</span></div>
    <div class="goal-card">
      <div class="goal-icon">kcal</div>
      <div class="goal-info">
        <div class="goal-name"><span data-en="Daily Calories" data-ru="Дневные калории">Daily Calories</span></div>
      </div>
      <div class="goal-val">2000 kcal</div>
    </div>

    <div class="pro-banner">
      <div class="rocket">🚀</div>
      <div class="pro-info">
        <div class="pro-name"><span data-en="Unlock Unlimited Scans" data-ru="Безлимит сканов">Unlock Unlimited Scans</span></div>
        <div class="pro-price"><span data-en="Tap to upgrade" data-ru="Нажмите для апгрейда">Tap to upgrade</span></div>
      </div>
    </div>

    <div class="section-label"><span data-en="Settings" data-ru="Настройки">Settings</span></div>
    <div class="setting-card">
      <div class="setting-row">
        <div class="setting-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg></div>
        <div class="setting-name"><span data-en="Language" data-ru="Язык">Language</span></div>
        <div class="setting-val">English</div>
      </div>
      <div class="setting-row">
        <div class="setting-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/></svg></div>
        <div class="setting-name"><span data-en="Appearance" data-ru="Тема">Appearance</span></div>
        <div class="setting-val">System</div>
      </div>
      <div class="setting-row">
        <div class="setting-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg></div>
        <div class="setting-name"><span data-en="AI Model" data-ru="AI-модель">AI Model</span></div>
        <div class="setting-val">Gemini 2.5 Pro</div>
      </div>
      <div class="setting-row">
        <div class="setting-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></div>
        <div class="setting-name"><span data-en="Privacy & Data" data-ru="Приватность">Privacy & Data</span></div>
        <div class="setting-val">→</div>
      </div>
    </div>

    <div class="section-label"><span data-en="About" data-ru="О приложении">About</span></div>
    <div class="setting-card">
      <div class="setting-row">
        <div class="setting-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></div>
        <div class="setting-name"><span data-en="Version" data-ru="Версия">Version</span></div>
        <div class="setting-val">1.0.3</div>
      </div>
    </div>

    <div class="tabbar">
      <div class="tab"><div class="tab-icon"><svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><path d="M12 3l9 8h-2v9h-5v-6h-4v6H5v-9H3z"/></svg></div>HOME</div>
      <div class="tab"><div class="tab-icon"><svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/></svg></div>SCAN</div>
      <div class="tab"><div class="tab-icon"><svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><line x1="6" y1="20" x2="6" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="18" y1="20" x2="18" y2="14"/></svg></div>HISTORY</div>
      <div class="tab active"><div class="tab-icon"><svg width="56" height="56" viewBox="0 0 24 24" fill="#16a34a"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7" stroke="#16a34a" stroke-width="2" fill="none"/></svg></div>PROFILE</div>
    </div>
  `
};

document.querySelectorAll('[data-mock]').forEach(el => {
  const kind = el.getAttribute('data-mock');
  if (MOCK_TPL[kind]) el.innerHTML = MOCK_TPL[kind]();
});

// Scale mocks to fit their phone-screen container
function scaleMocks() {
  document.querySelectorAll('.mock').forEach(m => {
    const parent = m.parentElement;
    const w = parent.clientWidth;
    const scale = w / 1320;
    m.style.transform = `scale(${scale})`;
    m.style.transformOrigin = 'top left';
  });
}
scaleMocks();
window.addEventListener('resize', scaleMocks);
setTimeout(scaleMocks, 100);
