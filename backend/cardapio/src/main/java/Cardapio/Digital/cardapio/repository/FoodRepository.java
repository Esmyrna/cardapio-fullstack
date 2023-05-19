package Cardapio.Digital.cardapio.repository;

import Cardapio.Digital.cardapio.food.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Long> {
 // vai ter todos os metódos de acesso ao meu banco de dados
}
