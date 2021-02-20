class Animal {
    int legs;
}

class Dog extends Animal {
    void bark() {
    }
}

public class CompareToJava {
    public static void main(String[] args) {
        Animal animal = new Animal();
        Dog dog = (Dog)animal; // class cast exception
    }
}
