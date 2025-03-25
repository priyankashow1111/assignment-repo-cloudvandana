package employeemanagementsystem;
import java.util.ArrayList;
import java.util.List;

class Employee {
    private int id;
    private String name;
    private double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + salary);
        System.out.println("-------------------");
    }
}

public class EmployeeManagementSystem {
    public static void main(String[] args) {
        // Create a list to store employees
        List<Employee> employees = new ArrayList<>();

        // 1. Create at least 3 Employee objects.
        Employee emp1 = new Employee(1, "Priyanka Show", 50000.0);
        Employee emp2 = new Employee(2, "Pinkaaaa", 60000.0);
        Employee emp3 = new Employee(3, "Suraaaa", 55000.0);

        // Add employees to the list
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);

        // Display details of all employees
        System.out.println("Employee Details:");
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }    
}
