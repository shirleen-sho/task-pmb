import './App.css';

function App() {
  // DATA
  const suppliers = [
    { id: 1, name: 'Anthony' },
    { id: 2, name: 'Benedict' },
    { id: 3, name: 'Chris' }
  ];
  const items = [
      { supplier_id: 1, item_name: 'aqua', item_price: 3000 },
      { supplier_id: 1, item_name: 'ciki ball', item_price: 5000 },
      { supplier_id: 1, item_name: 'silverqueen', item_price: 16000 },
      { supplier_id: 1, item_name: 'sprite', item_price: 7700 },
      { supplier_id: 2, item_name: 'sprite', item_price: 7000 },
      { supplier_id: 2, item_name: 'aqua', item_price: 3500 },
      { supplier_id: 2, item_name: 'lays', item_price: 5500 },
      { supplier_id: 3, item_name: 'aqua', item_price: 3200 },
      { supplier_id: 3, item_name: 'silverqueen', item_price: 17000 },
      { supplier_id: 3, item_name: 'sprite', item_price: 7500 },
  ];

  // FUNCTION (Group By Supplier)
  const resultGroupBySupplier = suppliers.map(s => {
    const filterItemBySupplier = items.filter(i => { return s.id === i.supplier_id })
    return { supplier_info: s, supplier_items: filterItemBySupplier }
  })
  console.log('Group By Supplier', resultGroupBySupplier)

  // FUNCTION (Group By Item) - cara 1
  const object1 = items.reduce((groups, item) => {
    const { supplier_id, item_name, item_price } = item;
    const supplier = suppliers.find(s => { return s.id === supplier_id })
    groups[item_name] = [...groups[item_name] || [], { supplier_name: supplier.name , item_price: item_price }];
    return groups;
  }, {});
  let resultGroupByItem = []
  Object.keys(object1).forEach((key) => {
    resultGroupByItem.push({ item_info: key, item_suppliers: object1[key] })
  });
  console.log('Group By Item (cara 1)', resultGroupByItem)

  // FUNCTION (Group By Item) - cara 2
  const res = items.map(i => {
    const findSupplier = suppliers.find(s => { return s.id === i.supplier_id })
    return { item_info: i, supplier_items: findSupplier }
  })
  let object2 = {}
  res.forEach(r => {
    if (object2[r.item_info.item_name] === undefined) { object2[r.item_info.item_name] = [] }
    object2[r.item_info.item_name].push({ i_supplier: r.supplier_items.name, i_price: r.item_info.item_price })
  })
  let resultGroupByItem2 = []
  Object.keys(object2).forEach((key) => {
    resultGroupByItem2.push({ item_info: key, item_suppliers: object2[key] })
  });
  console.log('Group By Item (cara 2)', resultGroupByItem2)

  return (
    <div className='flex flex-row gap-20 p-20'>
      <div>
        <table className='table-fixed w-full' id='tableGroupBySupplier'>
          <thead>
            <tr>
              <th colSpan={3} className='py-3'>Group By Supplier</th>
            </tr>
          </thead>
          <tbody>
            { resultGroupBySupplier.map(result => 
                <>
                  <tr>
                    <td colSpan={3} className='bg-sky-100 px-3 py-1'>{result.supplier_info.name}</td>
                  </tr>
                  { result.supplier_items.map(item =>
                  <tr>
                    <td className='p-1'></td>
                    <td className='p-1'>{item.item_name}</td>
                    <td className='p-1'>{item.item_price}</td>
                  </tr>
                  ) }
                </>
            ) }
          </tbody>
        </table>
      </div>
      <div>
        <table className='table-fixed w-full' id='tableGroupByItem'>
          <thead>
            <tr>
              <th colSpan={3} className='py-3'>Group By Item</th>
            </tr>
          </thead>
          <tbody>
            { resultGroupByItem.map(result => 
                <>
                  <tr>
                    <td colSpan={3} className='bg-slate-200 px-3 py-1'>{result.item_info}</td>
                  </tr>
                  { result.item_suppliers.map(item =>
                  <tr >
                    <td className='p-1'></td>
                    <td className='p-1'>{item.supplier_name}</td>
                    <td className='p-1'>{item.item_price}</td>
                  </tr>
                  ) }
                </>
            ) }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
