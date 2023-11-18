import {useEffect, useState} from "react";
import {DealDto} from "@/dto/deal.dto";

export const DealComponent = () => {
  const [deals, setDeals] = useState([] as DealDto[]);
  const [newDeal, setNewDeal] = useState({name: ''});
  const [editedDeal, setEditedDeal] = useState({ id: '', name: '', isCompleted: false });
  
  const fetchDeals = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/deal');
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setDeals(data);
      }
    } catch (error) {
      console.error('Failed to fetch deals', error);
    }
  };
  
  useEffect(() => {
    const fetch = async () => await fetchDeals();
    fetch().catch()
  }, []);
  
  const addDeal = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/deal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newDeal }),
      });

      if (response.ok) {
        await fetchDeals();
        setNewDeal({name: ''});
      } else {
        console.error('Failed to add deal');
      }
    } catch (error) {
      console.error('Failed to add deal', error);
    }
  };
  
  const deleteDeal = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/api/deal?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchDeals();
      } else {
        console.error('Failed to delete deal');
      }
    } catch (error) {
      console.error('Failed to delete deal', error);
    }
  };
  
  const updateDeal = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/deal?id=${editedDeal.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: editedDeal.name }),
      });

      if (response.ok) {
        await fetchDeals();
        setEditedDeal({ id: '', name: '', isCompleted: false });
      } else {
        console.error('Failed to update deal');
      }
    } catch (error) {
      console.error('Failed to update deal', error);
    }
  };

  return (
    <div>
      <h2>Deals</h2>
      <ul>
        {deals.map((deal: any) => (
          <li key={deal.id}>
            {editedDeal.id === deal.id ? (
              <>
                <input
                  type="text"
                  value={editedDeal.name}
                  onChange={(e) => setEditedDeal({ ...editedDeal, name: e.target.value })}
                />
                <button onClick={updateDeal}>Save</button>
              </>
            ) : (
              <>
                <span>{deal.name}</span>
                <button onClick={() => deleteDeal(deal._id)}>Delete</button>
                <button onClick={() => setEditedDeal({ id: deal.id, name: deal.name, isCompleted: deal.isCompleted })}>
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}