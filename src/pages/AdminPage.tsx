import React, { useState } from 'react';
import { Plus, Trash2, Edit3, Save, X, Palette } from 'lucide-react';

const AdminPage = () => {
  // Mock product data - in a real app, this would come from a database
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Industrial Dining Table',
      category: 'Tables',
      colors: [
        { name: 'Natural Steel', code: '#8B9DC3', image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Black Steel', code: '#2C3E50', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Bronze Steel', code: '#CD7F32', image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'White Steel', code: '#F8F9FA', image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800' }
      ]
    },
    {
      id: 2,
      name: 'Modern Steel Chair',
      category: 'Chairs',
      colors: [
        { name: 'Charcoal', code: '#36454F', image: 'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Silver', code: '#C0C0C0', image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Copper', code: '#B87333', image: 'https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Matte Black', code: '#28282B', image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800' }
      ]
    },
    {
      id: 3,
      name: 'Display Rack Unit',
      category: 'Racks',
      colors: [
        { name: 'Industrial Gray', code: '#71797E', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Pure White', code: '#FFFFFF', image: 'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Deep Black', code: '#000000', image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800' },
        { name: 'Navy Blue', code: '#1B2951', image: 'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=800' }
      ]
    }
  ]);

  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [editingColor, setEditingColor] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newColor, setNewColor] = useState({
    name: '',
    code: '#000000',
    image: ''
  });

  // Add new color to a product
  const addColor = (productId: number) => {
    if (!newColor.name || !newColor.code || !newColor.image) {
      alert('Please fill in all fields');
      return;
    }

    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, colors: [...product.colors, { ...newColor }] }
        : product
    ));

    setNewColor({ name: '', code: '#000000', image: '' });
    setShowAddForm(false);
    setSelectedProduct(null);
  };

  // Delete a color from a product
  const deleteColor = (productId: number, colorIndex: number) => {
    if (window.confirm('Are you sure you want to delete this color?')) {
      setProducts(products.map(product => 
        product.id === productId 
          ? { ...product, colors: product.colors.filter((_, index) => index !== colorIndex) }
          : product
      ));
    }
  };

  // Update an existing color
  const updateColor = (productId: number, colorIndex: number, updatedColor: any) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { 
            ...product, 
            colors: product.colors.map((color, index) => 
              index === colorIndex ? updatedColor : color
            )
          }
        : product
    ));
    setEditingColor(null);
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Color Management</h1>
          <p className="text-slate-600">Add, edit, or remove color variations for your products</p>
        </div>

        {/* Products List */}
        <div className="space-y-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-800">{product.name}</h2>
                  <span className="text-sm text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setSelectedProduct(product.id);
                    setShowAddForm(true);
                  }}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Color</span>
                </button>
              </div>

              {/* Colors Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.colors.map((color, colorIndex) => (
                  <ColorCard
                    key={colorIndex}
                    color={color}
                    colorIndex={colorIndex}
                    productId={product.id}
                    isEditing={editingColor === colorIndex}
                    onEdit={() => setEditingColor(colorIndex)}
                    onSave={(updatedColor) => updateColor(product.id, colorIndex, updatedColor)}
                    onCancel={() => setEditingColor(null)}
                    onDelete={() => deleteColor(product.id, colorIndex)}
                  />
                ))}
              </div>

              {/* Add Color Form */}
              {showAddForm && selectedProduct === product.id && (
                <div className="mt-6 p-4 bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center space-x-2">
                    <Palette className="w-5 h-5 text-orange-600" />
                    <span>Add New Color</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Color Name</label>
                      <input
                        type="text"
                        value={newColor.name}
                        onChange={(e) => setNewColor({ ...newColor, name: e.target.value })}
                        placeholder="e.g., Midnight Blue"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Color Code</label>
                      <div className="flex space-x-2">
                        <input
                          type="color"
                          value={newColor.code}
                          onChange={(e) => setNewColor({ ...newColor, code: e.target.value })}
                          className="w-12 h-10 border border-slate-300 rounded-lg cursor-pointer"
                        />
                        <input
                          type="text"
                          value={newColor.code}
                          onChange={(e) => setNewColor({ ...newColor, code: e.target.value })}
                          placeholder="#000000"
                          className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Image URL</label>
                      <input
                        type="url"
                        value={newColor.image}
                        onChange={(e) => setNewColor({ ...newColor, image: e.target.value })}
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-3 mt-4">
                    <button
                      onClick={() => addColor(product.id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Color</span>
                    </button>
                    <button
                      onClick={() => {
                        setShowAddForm(false);
                        setSelectedProduct(null);
                        setNewColor({ name: '', code: '#000000', image: '' });
                      }}
                      className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <X className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Color Card Component
const ColorCard = ({ color, colorIndex, productId, isEditing, onEdit, onSave, onCancel, onDelete }: any) => {
  const [editData, setEditData] = useState(color);

  const handleSave = () => {
    if (!editData.name || !editData.code || !editData.image) {
      alert('Please fill in all fields');
      return;
    }
    onSave(editData);
  };

  if (isEditing) {
    return (
      <div className="border-2 border-orange-300 rounded-lg p-4 bg-orange-50">
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Color Name</label>
            <input
              type="text"
              value={editData.name}
              onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              className="w-full px-2 py-1 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Color Code</label>
            <div className="flex space-x-1">
              <input
                type="color"
                value={editData.code}
                onChange={(e) => setEditData({ ...editData, code: e.target.value })}
                className="w-8 h-8 border border-slate-300 rounded cursor-pointer"
              />
              <input
                type="text"
                value={editData.code}
                onChange={(e) => setEditData({ ...editData, code: e.target.value })}
                className="flex-1 px-2 py-1 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-orange-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">Image URL</label>
            <input
              type="url"
              value={editData.image}
              onChange={(e) => setEditData({ ...editData, image: e.target.value })}
              className="w-full px-2 py-1 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-orange-500"
            />
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-sm flex items-center justify-center space-x-1"
            >
              <Save className="w-3 h-3" />
              <span>Save</span>
            </button>
            <button
              onClick={onCancel}
              className="flex-1 bg-slate-600 hover:bg-slate-700 text-white px-2 py-1 rounded text-sm flex items-center justify-center space-x-1"
            >
              <X className="w-3 h-3" />
              <span>Cancel</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-3 mb-3">
        <div
          className="w-8 h-8 rounded-full border-2 border-white shadow-md"
          style={{ backgroundColor: color.code }}
        />
        <div className="flex-1">
          <h4 className="font-medium text-slate-800">{color.name}</h4>
          <p className="text-xs text-slate-600">{color.code}</p>
        </div>
      </div>
      
      <div className="mb-3">
        <img
          src={color.image}
          alt={color.name}
          className="w-full h-24 object-cover rounded-lg"
        />
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={onEdit}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-sm flex items-center justify-center space-x-1"
        >
          <Edit3 className="w-3 h-3" />
          <span>Edit</span>
        </button>
        <button
          onClick={onDelete}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-sm flex items-center justify-center space-x-1"
        >
          <Trash2 className="w-3 h-3" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default AdminPage;