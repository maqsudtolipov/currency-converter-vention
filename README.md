
## 💱 Currency Converter Widget

A simple currency converter app inspired by [xe.com](https://www.xe.com/). You can input value, change between 2 different currencies and swap them.

### 🚀 Features
- Input for currency
- 2 dropdowns for choosing currencies
- Swap button for swapping between selected currencies
- Display for results, shows localized: result, rates for 1 value rate of each currency
- Refresh button for updating currency rates


### 📦 Installation
Install
```
npm install
```
Run development server
```
npm run dev
```
### 💵 Rate calculation
App calculates rates using USD as base using current formula.
```
result = amount * (toRate / fromRate)
```
Example:
```
100 UZS to USD = 100 * (1 / 12500) = 0.008 USD
```

Rates fetched from [exchangerate-api.com](www.exchangerate-api.com).

### 🎨 Custom components
Dropdown
```
<Dropdown selectedItem={selectedItem}>
  <DropdownTrigger>
    <DropdownSelected />
  </DropdownTrigger>
  
  <DropdownList>
    {dropdownCurrencies.map((item) => (
      <DropdownItem
        key={item.code}
        keyId={item.code}
        flag={item.flag}
        currency={item.name}
        onSelect={onSelect}
      />
    ))}
  </DropdownList>
</Dropdown>
```
Input
```
 <Input input={input} setInput={handleInputChange} />
```
SwitchBtn
```
<SwitchBtn onSwitch={switchCurrency} />;
```